import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Tweet from './Tweet.react';
import CollectionActionCreators from '../actions/CollectionActionCreators';

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
class StreamTweet extends React.Component {
  constructor() {
    super();
    console.log('[Snapterest] StreamTweet: 1. Running getInitialState()');
    this.state = {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  }
  addTweetToCollection(tweet) {
    CollectionActionCreators.addTweetToCollection(tweet);
  }
  componentWillMount() {
    console.log('[snapterest] StreamTweet: 2. Running componentWillUnmount()');
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });
    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  }
  componentDidMount() {
    console.log('[snapterest] StreamTweet: 3. Running componentDidMount()');
    const componentDOMRepresentation = ReactDOM.findDOMNode(this);
    console.log(componentDOMRepresentation);
    window.stapterest.headerHtml = componentDOMRepresentation.childlen[0].outerHTML;
    window.stapterest.tweetHtml = componentDOMRepresentation.childlen[1].outerHTML;
  }
  componentWillReceiveProps(nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

    const currentTweetLength = this.props.tweet.text.length;
    const nextTweetLength = nextProps.tweet.text.length;
    const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    let headerText;

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
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');

    return nextProps.tweet.text.length > 1;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
    window.snapterest.numberOfDisplayedTweets++;
  }
  componentWillUnmount() {
    console.log('[snapterest] Strema Tweet: 8. Running componentWillUnmount()');
    delete window.snapterest;
  }

  render() {
    console.log('[Snapterest] StreamTweet: Running render()');
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.addTweetToCollection.bind(this)} />
      </section>
    );
  }
}
export default StreamTweet;
