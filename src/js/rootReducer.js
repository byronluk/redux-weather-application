import { combineReducers } from 'redux';
import searchReducer from '../components/searchBar/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
