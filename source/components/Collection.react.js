var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControles = require('./CollectionControles.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({
  createHtmlMarkupStringOfTweetList: function () {
    var htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets} />
    );
    var htmlMarkup = {
      html: htmlString
    };
    return JSON.stringify(htmlMarkup);
  },
  getListOfTweetIds: function () {
    return Object.keys(this.props.tweets);
  },
  getNumberOfTweetsInCollection: function () {
    return this.getListOfTweetIds().length;
  },
  render: function () {
    var numberOfTweetsInCollction = this.getNumberOfTweetsInCollection();
    if (numberOfTweetsInCollction > 0) {
      var tweets = this.props.tweets;
      var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
      var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
      var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

      return (
        <div>

          <CollectionControles
             numberOfTweetsInCollction={numberOfTweetsInCollction}
             htmlMarkup={htmlMarkup}
             onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />

           <TweetList
             tweets={tweets}
             onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
        </div>
      );
    }
    return <Header text="Your colleciton is empty" />;
  }
});
module.exports = Collection;
