import SnapkiteStreamClient from 'snapkite-stream-client';
import { receiveTweet } from '../actions/TweetActionCreators';


function initializeStreamOfTweets(store) {
  const receiveTweetCallBack = (tweet) => store.dispatch(receiveTweet(tweet));
  SnapkiteStreamClient.initializeStream(receiveTweetCallBack, {
    hostname: '127.0.0.1',
    port: 3000
  });
}
export default {
  initializeStreamOfTweets
};
