jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function() {
  it('returns an array of tweet ids', function() {
    var TweetUtils = require('../TweetUtils');
    var TweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };
    var expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
    var actualListOfTweetIds = TweetUtils.getListOfTweetIds(TweetsMock);
    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});
