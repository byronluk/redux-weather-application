import React, { Component } from 'react';

import SearchBar from '../components/searchBar';
import CityInformation from '../components/cityInformation';
import SearchHistory from '../components/searchHistory';

console.log(REACT_APP_WEATHER_API_KEY);
export default class App extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div className='container'>
        <div className='head-container'>
          <h1 className='page-title'>Weather App</h1>
          <p className='page-description'>Always know if you need an umbrella!</p>
        </div>
        <div className='content-container'>
          <SearchBar />
          <CityInformation />
          <SearchHistory />
        </div>
      </div>
    );
  }
}
