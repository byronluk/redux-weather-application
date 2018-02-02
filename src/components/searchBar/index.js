import { connect } from 'react-redux';
import searchBar from './searchBar';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
    history: store.search.history,
    error: store.search.error,
  };
}
export default connect(mapStoreToProps)(searchBar);

