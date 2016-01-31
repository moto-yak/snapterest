var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControles = require('./CollectionControles.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');
var CollectionUtils = require('../utils/CollectionUtils');
var CollectionStore = require('../stores/CollectionStore');

var Collection = React.createClass({
  getInitialState: function() {
    return {
      collectionTweets: CollectionStore.getCollectionTweets()
    }
  },
  componentDidMount: function() {
    CollectionStore.addChangeListner(this.onCollectionChange);
  },
  componentWillUnmount: function() {
    CollectionStore.removeChangeListner(this.onCollectionChange);
  },
  onCollectionChange: function() {
    this.setState({
      collectionTweets: CollectionStore.getCollectionTweets()
    })
  },
  createHtmlMarkupStringOfTweetList: function () {
    var htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.state.collectionTweets} />
    );
    var htmlMarkup = {
      html: htmlString
    };
    return JSON.stringify(htmlMarkup);
  },
  render: function () {
    var collectionTweets = this.state.collectionTweets;
    var numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
    var htmlMarkup;

    if (numberOfTweetsInCollection > 0) {
      var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      return (
        <div>

          <CollectionControles
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup} />

          <TweetList
            tweets={collectionTweets} />

        </div>
      );
    }

    return <Header text="Your colleciton is empty" />;
  }
});
module.exports = Collection;
