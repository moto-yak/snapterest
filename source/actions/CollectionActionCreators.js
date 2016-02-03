import * as ActionTypes from '../constants/ActionTypes';

export function addTweetToCollection(tweet) {
  return {
    type: ActionTypes.ADD_TWEET_TO_COLLECTION,
    tweet: tweet
  };
}
export function removeTweetFromCollection(tweetId) {
  return {
    type: ActionTypes.REMOVE_TWEET_FROM_COLLECTION,
    tweetId: tweetId
  };
}

export function removeAllTweetsFromCollection() {
  return {
    type: ActionTypes.REMOVE_ALL_TWEET_FROM_COLLECTION
  };
}

export function setCollectionName(collectionName) {
  return {
    type: ActionTypes.SET_COLLECTION_NAME,
    name: collectionName
  };
}
