import React from 'react';

export default class cityInformation extends React.Component {

  render() {
    return(
      <div className='city-container'>
        <h6 className='container-title'>City Information</h6>
        <h2 className='city-name'>Tokyo</h2>
        <div className='info-container'>
          <label htmlFor='temperature' className='city-info-label'>
            Temperature (F)
            <p className='city-info'>65.62F</p>
          </label>
          <label htmlFor='pressure' className='city-info-label'>
            Pressure
            <p className='city-info'>997</p>
          </label>
          <label htmlFor='humidity' className='city-info-label'>
            Humidity
            <p className='city-info'>39%</p>
          </label>
          <label htmlFor='lowest-temp' className='city-info-label'>
            Lowest Temp (F)
            <p className='city-info'>62.01F</p>
          </label>
          <label htmlFor='highest-temp' className='city-info-label'>
            Highest Temp (F)
            <p className='city-info'>71.01F</p>
          </label>
          <label htmlFor='wind-speed' className='city-info-label'>
            Wind Speed
            <p className='city-info'>24.16mph</p>
          </label>
        </div>
      </div>
    );
  }
}
