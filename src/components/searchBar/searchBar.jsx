import React from 'react';

export default class searchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='input-form'>
        <ul className='quick-links'>
          <li className='city-list-item'>
            <button className='quick-button' name='Los Angeles'>
              Los Angeles
            </button>
            <button className='quick-button' name='New York'>
              New York
            </button>
            <button className='quick-button' name='San Diego'>
              San Diego
            </button>
            <button className='quick-button' name='Tokyo'>
              Tokyo
            </button>
          </li>
        </ul>
        <input type='text' name='cityInput' className='input-bar' />
        <button className='submit-button' name='submit'>
          Go!
        </button>
      </form>
    );
  }
}
