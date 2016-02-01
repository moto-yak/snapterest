import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControles from './CollectionControles.react';
import TweetList from './TweetList.react';
import Header from './Header.react';
import CollectionUtils from '../utils/CollectionUtils';

class Collection extends React.Component {
  constructor() {
    super();
    console.log(this.props);
    this.state = {
      collectionTweets: this.props.tweets
    };
    this.onCollectionChange = () => {
      this.setState({
        collectionTweets: this.props.tweets
      });
    };
  }

  componentDidMount() {
//    CollectionStore.addChangeListner(this.onCollectionChange);
  }

  componentWillUnmount() {
//    CollectionStore.removeChangeListner(this.onCollectionChange);
  }

  createHtmlMarkupStringOfTweetList () {
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.state.collectionTweets} />
    );
    const htmlMarkup = {
      html: htmlString
    };
    return JSON.stringify(htmlMarkup);
  }

  render () {
    const collectionTweets = this.state.collectionTweets;
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
export default Collection;
