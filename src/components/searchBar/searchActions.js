// import WEATHER_API_KEY from './config';
//  Import API_KEY from config.js/json
//  Heroku ENV_VARIABLES
const axios = require('axios');

export function updateSearchInput(input) {
  return {
    type: 'UPDATE_SEARCH_INPUT',
    payload: { input }
  };
}

export function searchCity(input) {
  console.log(WEATHER_API_KEY);
  return {
    type: 'SEARCH_CITY',
    payload: axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: input,
        appid: WEATHER_API_KEY,
        units: 'imperial'
      }
    })
  };
}
