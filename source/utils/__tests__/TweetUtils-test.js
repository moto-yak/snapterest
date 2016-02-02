jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function() {
  it('returns an array of tweet ids', function() {
    const TweetUtils = require('../TweetUtils');
    const TweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };
    const expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
    const actualListOfTweetIds = TweetUtils.getListOfTweetIds(TweetsMock);
    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});
