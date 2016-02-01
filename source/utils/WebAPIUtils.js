import SnapkiteStreamClient from 'snapkite-stream-client';
import TweetActionCreators from '../actions/TweetActionCreators';

function initializeStreamOfTweets() {
  SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet, {
    hostname: '192.168.100.72',
    port: 3000
  });
}
export default {
  initializeStreamOfTweets
};
