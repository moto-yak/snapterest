import React from 'react';
import Header from './Header.react';
import Button from './Button.react';
import CollectionUtils from '../utils/CollectionUtils';
import CollectionRenameForm from './CollectionRenameForm.react';
import CollectionExportForm from './CollectionExportForm.react';
import { connect } from 'react-redux';
import { removeAllTweetsFromCollection } from '../actions/CollectionActionCreators';

@connect(state => ({
  tweets: state.collection.tweets,
  name: state.collection.name
}))
export default class CollectionControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditingName: false
    };
  }

  getHeaderText() {
    const numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(this.props.tweets);
    let text = numberOfTweetsInCollection;
    const name = this.props.name;

    if (numberOfTweetsInCollection === 1) {
      text += ' tweet in your';
    } else {
      text += ' tweets in your';
    }

    return (
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    );
  }

  toggleEditCollectionName() {
    this.setState({
      isEditingName: !this.state.isEditingName
    });
  }

  removeAllTweetsFromCollection() {
    this.props.dispatch(removeAllTweetsFromCollection());
  }

  render() {
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm
          onCancelCollectionNameChange={::this.toggleEditCollectionName} />
      );
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />

        <Button
          label='Rename collection'
          handleClick={::this.toggleEditCollectionName} />

        <Button
          label='Empty collection'
          handleClick={::this.removeAllTweetsFromCollection} />

        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    );
  }
}
