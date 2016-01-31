var React = require('react');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
var TweetStore = require('../stores/TweetStore.js');

var Stream = React.createClass({
  getInitialState: function() {
    return {
      tweet: TweetStore.getTweet()
    };
  },
  componentDidMount: function() {
    TweetStore.addChangeListner(this.onTweetChange);
  },
  componentWillUnmount: function() {
    TweetStore.removeChangeListner(this.inTweetChange);
  },
  onTweetChange: function() {
    this.setState({
      tweet: TweetStore.getTweet()
    });
  },
  render: function () {
    var tweet = this.state.tweet;

    if (tweet) {
      return (
        <StreamTweet tweet={tweet} />
      );
    }
    return (
      <Header text="Waiting for public photos from Twitter..." />
    );
  }
});
module.exports = Stream;
