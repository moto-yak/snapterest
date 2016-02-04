import React from 'react';
import Tweet from './Tweet.react.js';
import { connect } from 'react-redux';
import { removeTweetFromCollection } from '../actions/CollectionActionCreators';
import TweetUtils from '../utils/TweetUtils';
const listStyle = {
  padding: '0'
};

const listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
};
@connect(state => ({tweets: state.collection.tweets}))
export default class TweetList extends React.Component {
  removeTweetFromCollection(tweet) {
    this.props.dispatch(removeTweetFromCollection(tweet.id));
  }
  getTweetElement(tweetId) {
    const tweet = this.props.tweets[tweetId];
    const handleRemoveTweetFromCollection = ::this.removeTweetFromCollection;
    let tweetElement;

    if (handleRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={handleRemoveTweetFromCollection} />
      );
    } else {
      tweetElement = <Tweet tweet={tweet} />;
    }
    return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>;
  }
  render() {
    const tweetElements = TweetUtils.getListOfTweetIds(this.props.tweets).map(::this.getTweetElement);
    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    );
  }
}
