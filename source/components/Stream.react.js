import React from 'react';
import StreamTweet from './StreamTweet.react';
import Header from './Header.react';
import { connect } from 'react-redux';

//let unsubscribe;
@connect(state => ({tweet: state.tweet}))
export default class Stream extends React.Component {
  constructor() {
    super();
  }

  onTweetChange() {
    this.setState({
      tweet: this.props.tweet
    });
  }

  componentDidMount() {
//    unsubscribe = this.props.subscribe(this.onTweetChange);
  }
  componentWillUnmount() {
//    this.props.unsubscribe(unsubscribe);
  }

  render() {
    const { tweet } = this.props;

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
