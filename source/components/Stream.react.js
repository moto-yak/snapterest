import React from 'react';
import StreamTweet from './StreamTweet.react';
import Header from './Header.react';
import TweetStore from '../stores/TweetStore.js';

class Stream extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet: TweetStore.getTweet()
    };
    this.onTweetChange = () => {
      this.setState({
        tweet: TweetStore.getTweet()
      });
    };
  }

  componentDidMount() {
    TweetStore.addChangeListner(this.onTweetChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListner(this.inTweetChange);
  }

  render() {
    const { tweet } = this.state;

    if (tweet) {
      return (
        <StreamTweet tweet={tweet} />
      );
    }
    return (
      <Header text="Waiting for public photos from Twitter..." />
    );
  }
}
export default Stream;
