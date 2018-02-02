import React from 'react';

export default class SearchHistory extends React.Component {

  render() {
    return (
      <div className='history-container'>
        <h6 className='container-title'>Search History</h6>
        <table className='history-table'>
          <tr className='previous-search'>
            <td className='previous-city' rowSpan='2'>
              San Diego
            </td>
            <td className='previous-date'>
              04/28/2016
            </td>
          </tr>
          <tr className='previous-time'>
            19:04:46
          </tr>
        </table>
      </div>
    )
  }
}