import React from 'react';

export default class SearchHistory extends React.Component {

  render() {
    const history = this.props.history;

    return (
      <div className='history-container'>
        <h6 className='container-title'>Search History</h6>
        <table className='history-table'>
          <tbody className='history-body'>
            { history.map((searchItem, index) => (
              <tr className='previous-search' key={ index }>
                <td className='previous-city'>
                  { searchItem.city }
                </td>
                <td className='previous-date'>
                  { searchItem.date }
                </td>
                <td className='previous-time'>
                  { searchItem.time }
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
