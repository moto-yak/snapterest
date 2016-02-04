import SnapkiteStreamClient from 'snapkite-stream-client';
import { receiveTweet } from '../actions/TweetActionCreators';


function initializeStreamOfTweets(store) {
  const receiveTweetCallBack = (tweet) => store.dispatch(receiveTweet(tweet));
  SnapkiteStreamClient.initializeStream(receiveTweetCallBack, {
    hostname: '192.168.100.72',
    port: 3000
  });
}
export default {
  initializeStreamOfTweets
};
