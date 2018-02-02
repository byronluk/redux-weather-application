import { connect } from 'react-redux';
import searchHistory from './searchHistory';

function mapStoreToProps(store) {
  return {
    history: store.search.history,
  };
}

export default connect(mapStoreToProps)(searchHistory);
