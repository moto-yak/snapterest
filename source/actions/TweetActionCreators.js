import AppDispatcher from '../dispatcher/AppDispatcher';

function receiveTweet(tweet) {
  const action = {
    type: 'receive_tweet',
    tweet: tweet
  };
  AppDispatcher.dispatch(action);
}

const TweetActionCreators = {
  receiveTweet: receiveTweet
};

export default TweetActionCreators;
