import React from 'react';

import searchBar from '../components/searchBar';
import cityInformation from '../components/cityInformation';
import searchHistory from '../components/searchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='head-container'>
          <h1 className='page-title'>Weather App</h1>
          <p className='page-description'>Always know if you need an umbrella!</p>
        </div>
        <searchBar />
        <cityInformation />
        <searchHistory />
      </div>
    );
  }
}
