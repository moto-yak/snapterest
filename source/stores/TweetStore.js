var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var tweet = null;

function setTweet(receivedTweet) {
  tweet = receivedTweet;
}

function emitChange() {
  TweetStore.emit('change');
}


var TweetStore = assign({}, EventEmitter.prototype, {
  addChangeListner: function (callback) {
    this.on('change', callback);
  },
  removeChangeListner: function(callback) {
    this.removeListner('change', callback);
  },
  getTweet: function() {
    return tweet;
  }
});

function handleAction(action) {
  if (action.type === 'receive_tweet') {
    setTweet(action.tweet);
    emitChange();
  }
}
TweetStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = TweetStore;
