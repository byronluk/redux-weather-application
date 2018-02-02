import React from 'react';

import { updateSearchInput, searchCity } from './searchActions';

export default class searchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchCity = this.handleSearchCity.bind(this);
    this.handleQuickLinks = this.handleQuickLinks.bind(this);
  }
  handleInputChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(updateSearchInput(value));
  }
  handleSearchCity(event) {
    event.preventDefault();
    const { input, dispatch } = this.props;

    if (!input) {
      return;
    }
    dispatch(searchCity(input));
  }
  handleQuickLinks(event) {
    event.preventDefault();
    const dispatch = this.props.dispatch;
    const value = event.target.name;

    dispatch(searchCity(value));
  }
  render() {
    const error = this.props.error;
    //  adds 5 most recent searches to recentItems
    const history = this.props.history.slice().reverse();
    const historyLength = history.length < 5 ? history.length : 5;
    const recentItems = [];
    for (let i = 0; i < historyLength; i += 1) {
      if (recentItems.indexOf(history[i].city) < 0) {
        recentItems.push(history[i].city);
      }
    }

    return (
      <form className='input-form'>
        <ul className='quick-links'>
          { recentItems.map((item, index) => (
            <li className='city-list-item' key={ index }>
              <button className='quick-button' name={ item } onClick={ this.handleQuickLinks }>
                { item }
              </button>
            </li>
          ))}
        </ul>
        <input
          type='text'
          name='cityInput'
          className='input-bar'
          onChange={ this.handleInputChange }
          value={ this.props.input }
        />
        { error &&
        <p className='error-message'>{ error.message }</p>}
        <button
          className='submit-button'
          name='submit'
          onClick={ this.handleSearchCity }
        >
          Go!
        </button>
      </form>
    );
  }
}
