import { connect } from 'react-redux';
import cityInformation from './cityInformation';

function mapStoreToProps(store) {
  return {
    cityInfo: store.search.cityInfo,
  };
}
export default connect(mapStoreToProps)(cityInformation);
