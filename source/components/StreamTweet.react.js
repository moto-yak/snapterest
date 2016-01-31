var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
var StreamTweet = React.createClass({
  addTweetToCollection: function(tweet) {
    CollectionActionCreators.addTweetToCollection(tweet);
  },
  getInitialState: function () {
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  },
  componentWillMount: function () {
    console.log('[snapterest] StreamTweet: 2. Running componentWillUnmount()');
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });
    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 2
    };
  },
  componentDidMount: function () {
    console.log('[snapterest] StreamTweet: 3. Running componentDidMount()');
    var componentDOMRepresentation = ReactDOM.findDOMNode(this);
    console.log(componentDOMRepresentation);
    window.stapterest.headerHtml = componentDOMRepresentation.childlen[0].outerHTML;
    window.stapterest.tweetHtml = componentDOMRepresentation.childlen[1].outerHTML;
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    var headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText: headerText
    });

    window.snapterest.numberOfReceivedTweets++;
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');

    return (nextProps.tweet.text.length > 1);
  },
  componentWillUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
  },
  componentDidUpdate: function (prevProps, prevState) {
    console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
    window.snapterest.numberOfDisplayedTweets++;
  },
  componentWillUnmount: function() {
    console.log('[snapterest] Strema Tweet: 8. Running componentWillUnmount()');
    delete window.snapterest;
  },

  render: function() {
    console.log('[Snapterest] StreamTweet: Running render()');
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.addTweetToCollection} />
      </section>
    );
  }
});
module.exports = StreamTweet;
