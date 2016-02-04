import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  tweets: [],
  name: 'new'
};

export default function collection(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.ADD_TWEET_TO_COLLECTION: {
      let newTweets = Object.assign({}, state.tweets);
      newTweets[action.tweet.id] = action.tweet;
      return {
        tweets: newTweets,
        name: state.name
      };
    }
    case ActionTypes.REMOVE_TWEET_FROM_COLLECTION: {
      let newTweets = Object.assign({}, state.tweets);
      delete newTweets[action.tweetId];
      return {
        tweets: newTweets,
        name: state.name
      };
    }
    case ActionTypes.REMOVE_ALL_TWEET_FROM_COLLECTION: {
      return {
        tweets: [],
        name: state.name
      };
    }
    case ActionTypes.SET_COLLECTION_NAME: {
      return {
        tweets: state.tweets,
        name: action.name
      };
    }
    default: {
      return state;
    }
  }
}
