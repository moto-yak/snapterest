import * as ActionTypes from '../constants/ActionTypes';

export default {
  addTweetToCollection(tweet) {
    return {
      type: ActionTypes.ADD_TWEET_TO_COLLECTION,
      tweet: tweet
    };
  },
  removeTweetFromCollection(tweetId) {
    return {
      type: ActionTypes.REMOVE_TWEET_FROM_COLLECTION,
      tweetId: tweetId
    };
  },
  removeAllTweetsFromCollection() {
    return {
      type: ActionTypes.REMOVE_ALL_TWEET_FROM_COLLECTION
    };
  },
  setCollectionName(collectionName) {
    return {
      type: ActionTypes.SET_COLLECTION_NAME,
      collectionName: collectionName
    };
  }
};
