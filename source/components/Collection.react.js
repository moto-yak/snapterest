import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControles from './CollectionControles.react';
import TweetList from './TweetList.react';
import Header from './Header.react';
import CollectionUtils from '../utils/CollectionUtils';
import { connect } from 'react-redux';
import { getStore } from '../app.jsx';
import { Provider } from 'react-redux';

@connect(state => ({tweets: state.collection.tweets}))
export default class Collection extends React.Component {
  constructor() {
    super();
  }

  onCollectionChange() {
    this.setState({
      collectionTweets: this.props.tweets
    });
  }

  createHtmlMarkupStringOfTweetList () {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <Provider store={getStore()}>
        <TweetList tweets={this.props.tweets} />
      </Provider>
    );
    const htmlMarkup = {
      html: htmlString
    };
    return JSON.stringify(htmlMarkup);
  }

  render () {
    const collectionTweets = this.props.tweets;
    const numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
    let htmlMarkup;

    if (numberOfTweetsInCollection > 0) {
      htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      return (
        <div>
          <CollectionControles
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup} />

          <TweetList tweets={collectionTweets} />
        </div>
      );
    }

    return <Header text="Your colleciton is empty" />;
  }
}
