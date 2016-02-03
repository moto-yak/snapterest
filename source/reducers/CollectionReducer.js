import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  tweets: [],
  name: 'new'
};

export default function collection(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.ADD_TWEET_TO_COLLECTION: {
      if (state.tweets.length > 0 &&
        action.tweet.id === state.tweets[state.tweets.length - 1].id) {
        return state;
      }
      let newTweet = Object.assign({}, action.tweet);
        console.log(action.tweet);
      return {
        tweets: [...state.tweets, newTweet],
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
      console.dir('####################' + action.name);
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
