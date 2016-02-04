import TweetUtils from './TweetUtils';

function getNumberOfTweetsInCollection(collection) {
  return TweetUtils.getListOfTweetIds(collection).length;
}

function isEmptyCollection(collection) {
  return getNumberOfTweetsInCollection(collection) === 0;
}

export default {
  getNumberOfTweetsInCollection,
  isEmptyCollection
};
