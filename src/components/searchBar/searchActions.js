const axios = require('axios');

export function updateSearchInput(input) {
  return {
    type: 'UPDATE_EXPENSE_DESCRIPTION',
    payload: { input }
  };
}

export function searchCity(input) {
  return {
    type: 'SEARCH_CITY',
    payload: axios.get('api.openweathermap.org/data/2.5/weather', {
      params: 
    })
  }
}