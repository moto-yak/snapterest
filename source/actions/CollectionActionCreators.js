import * as ActionTypes from '../constants/ActionTypes';

function addTweetToCollection(tweet) {
  return {
    type: ActionTypes.ADD_TWEET_TO_COLLECTION,
    tweet: tweet
  };
}

function removeTweetFromCollection(tweetId) {
  return {
    type: ActionTypes.REMOVE_TWEET_FROM_COLLECTION,
    tweetId: tweetId
  };
}

function removeAllTweetsFromCollection() {
  return {
    type: ActionTypes.REMOVE_ALL_TWEET_FROM_COLLECTION
  };
}

function setCollectionName(collectionName) {
  return {
    type: ActionTypes.SET_COLLECTION_NAME,
    name: collectionName
  };
}

export {
  addTweetToCollection,
  removeTweetFromCollection,
  removeAllTweetsFromCollection,
  setCollectionName
};
