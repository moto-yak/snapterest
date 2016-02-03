import * as ActionTypes from '../constants/ActionTypes';

export default function tweet(state = null, action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_TWEET: {
      return action.tweet;
    }
    default: {
      return state;
    }
  }
}
