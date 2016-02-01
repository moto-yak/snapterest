import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CollectionAction from '../actions/CollectionAction';
import Application from './Application.react';

function mapStateToProps(state) {
  console.log(state);
  return {
    tweets: state.tweets,
    name: state.name
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CollectionAction, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Application);
