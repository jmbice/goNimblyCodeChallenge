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

app.get('/location/search/query', (req, res) => {
  //get location from name
  request(`www.metaweather.com/api/location/search/?query=${req.params.query}`, (error, response, body) => {
    if (error) {
      response
        ? res.status(response.statusCode).send()
        : console.log('error getting content');
    } else {
      res.status(response.statusCode).send(body);
    }
  });
});

app.get('/location/search/lattlong', (req, res) => {
  // location from latt/long
  request(`www.metaweather.com/api/location/search/?lattlong=${req.params.latt, req.params.long}`, (error, response, body) => {
    if (error) {
      response
        ? res.status(response.statusCode).send()
        : console.log('error getting content');
    } else {
      res.status(response.statusCode).send(body);
    }
  });
});

app.get('/location/weather/today/', (req, res) => {
  // weather from id, today
  request(`www.metaweather.com/api/location/${eq.params.woeid}/`, (error, response, body) => {
    if (error) {
      response
        ? res.status(response.statusCode).send()
        : console.log('error getting content');
    } else {
      res.status(response.statusCode).send(body);
    }
  });
});


app.get('/location/weather/date', (req, res) => {
  // weather from id, on date
  request(`www.metaweather.com/api/location/${eq.params.woeid}/${eq.params.date}/`, (error, response, body) => {
    if (error) {
      response
        ? res.status(response.statusCode).send()
        : console.log('error getting content');
    } else {
      res.status(response.statusCode).send(body);
    }
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
