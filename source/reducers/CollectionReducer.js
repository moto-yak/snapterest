import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  tweets: [],
  name: 'new'
};

export default function collectionReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.ADD_TWEET_TO_COLLECTION: {
      return {
        tweets: [...state.tweets, action.tweet],
        name: state.name
      };
    }
    case ActionTypes.REMOVE_TWEET_FROM_COLLECTION: {
      return {
        tweets: [
          ...state.tweets.slice(0, action.tweetId),
          ...state.tweets.slice(action.tweetId + 1)
        ],
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
