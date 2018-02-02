import React from 'react';

export default class cityInformation extends React.Component {

  render() {
    const { cityInfo } = this.props;
    return (
      <div className='city-container'>
        <h6 className='container-title'>City Information</h6>
        <h2 className='city-name'>
          { !cityInfo.name ? 'icon-placeholder' :
          <img
            src={ `http://openweathermap.org/img/w/${cityInfo.weather[0].icon}.png`}
            alt='Weather icon'
            className='weather-icon'
          />
          }
          { !cityInfo.name ? 'Enter a City' : cityInfo.name }
        </h2>
        <p className='location'>
          { !cityInfo.name ? 'Lat/Lng: icon-placeholder' :
          `Lat/Lng: ${cityInfo.coord.lat}, ${cityInfo.coord.lon}` }
        </p>
        <div className='info-container'>
          <label htmlFor='temperature' className='city-info-label'>
            Temperature (F)
            <p className='city-info'>{ !cityInfo.name ? 'add icons for defaults' : `${cityInfo.main.temp}F` }</p>
          </label>
          <label htmlFor='pressure' className='city-info-label'>
            Pressure
            <p className='city-info'>{ !cityInfo.name ? '1000' : cityInfo.main.pressure }</p>
          </label>
          <label htmlFor='humidity' className='city-info-label'>
            Humidity
            <p className='city-info'>{ !cityInfo.name ? '39%' : `${cityInfo.main.humidity}%` }</p>
          </label>
          <label htmlFor='lowest-temp' className='city-info-label'>
            Lowest Temp (F)
            <p className='city-info'>{ !cityInfo.name ? '62.01F' : `${cityInfo.main.temp_min}F` }</p>
          </label>
          <label htmlFor='highest-temp' className='city-info-label'>
            Highest Temp (F)
            <p className='city-info'> { !cityInfo.name ? '71.01F' : `${cityInfo.main.temp_max}F` }</p>
          </label>
          <label htmlFor='wind-speed' className='city-info-label'>
            Wind Speed
            <p className='city-info'>{ !cityInfo.name ? '24.16mph' : `${cityInfo.wind.speed}mph` }</p>
          </label>
        </div>
      </div>
    );
  }
}
