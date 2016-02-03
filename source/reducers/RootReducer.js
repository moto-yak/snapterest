import { combineReducers } from 'redux';
import collection from './CollectionReducer';
import tweet from './TweetReducer';

const RootReducer = combineReducers({
  collection,
  tweet
});

export default RootReducer;
