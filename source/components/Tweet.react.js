import React from 'react';

const tweetStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '300px',
  height: '400px',
  margin: '10px'
};

const imageStyle = {
  maxHeight: '400px',
  boxShadow: '0px 1px 1px 0px #aaa',
  border: '1px solid #fff'
};

/* eslint-disable no-unused-vars */
export default class Tweet extends React.Component {
  handleImageClick() {
    const { tweet } = this.props;
    const onImageClick = this.props.onImageClick;
    if (onImageClick) {
      onImageClick(tweet);
    }
  }

  render() {
    const { tweet } = this.props;
    const tweetMediaUrl = tweet.media[0].url;

    return (
      <div style={tweetStyle}>
        <img src={tweetMediaUrl} onClick={this.handleImageClick.bind(this)} style={imageStyle} />
      </div>
    );
  }
}
