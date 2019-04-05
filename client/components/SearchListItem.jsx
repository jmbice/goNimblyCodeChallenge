import React from 'react';
import dateFns from 'date-fns';

const SearchListItem = (props) => {
  const { data, location, parent, date } = props;
  const image = 'https://www.metaweather.com/static/img/weather/'
  const {
    humidity, the_temp, max_temp, min_temp, wind_direction_compass, wind_speed,
    weather_state_abbr, weather_state_name
  } = data.consolidated_weather[0];

  return (
    <div className="weatherWrapper">
      <div className="weatherLocation">
        <h4>{`${location}, ${parent}`}</h4>
      </div>
      <div className="weatherImageWrapper">
        <img
          src={`${image}${weather_state_abbr}.svg`}
          alt={weather_state_name}
          className="weatherImage"
        />
      </div>
      <div className="weatherState">
        {`${weather_state_name}`}
      </div>
      <div className="tempWrapper">
        <div className="temp"> {`${Math.round(min_temp)}\xB0 C`} </div>
        <div className="temp"> {`${Math.round(the_temp)}\xB0 C`} </div>
        <div className="temp"> {`${Math.round(max_temp)}\xB0 C`} </div>
      </div>
      <div className="windWrapper">
        <div className="wind">{`Wind Speed: ${Math.round(wind_speed)} kph`}</div>
        <div className="wind">{`Direction: ${wind_direction_compass}`}</div>
      </div>
      <div className="weatherTime">
        {dateFns.format(date, 'MM/DD/YYYY')}
      </div>
      <div className="weatherSourcesWrapper">
        {data.sources.map((e, i) => (
          <div className="weatherSources">
            <a
              key={`${i}_${data.woeid}`}
              href={`${e.url}`}
              rel="noreferrer noopener"
              target="_blank"
            >
              {`${e.slug}  `}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchListItem;
