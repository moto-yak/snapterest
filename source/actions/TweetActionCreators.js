import * as ActionTypes from '../constants/ActionTypes';

export function receiveTweet(tweet) {
  return {
    type: ActionTypes.RECEIVE_TWEET,
    tweet: tweet
  };
}
