function getListOfTweetIds(tweets) {
  if (tweets !== undefined && tweets !== null) {
    return Object.keys(tweets);
  } else {
    return [];
  }
}
export default { getListOfTweetIds };
