const express = require('express')
const path = require('path');
const request = require('request');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/location/search/query/:searchTerm', (req, res) => {
  //get location from name
  request(`https://www.metaweather.com/api/location/search/?query=${req.params.searchTerm}`, (error, response, body) => {
    if (error) {
      response
        ? res.status(response.statusCode).send()
        : console.log('error getting search term results');
    } else {
      const searchResults = JSON.parse(body);
      if(searchResults.length > 1) {
        res.status(response.statusCode).send(body);
      } else {
        request(`https://www.metaweather.com/api/location/${searchResults[0].woeid}/`, (e, r, b) => {
          if (e) {
            r
              ? res.status(r.statusCode).send()
              : console.log('error getting weather results from search term');
          } else {
            res.status(r.statusCode).send(b);
          }
        });
      }
    }
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
