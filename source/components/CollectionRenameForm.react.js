import React from 'react';
import Header from './Header.react';
import Button from './Button.react';
import { connect } from 'react-redux';
import { setCollectionName } from '../actions/CollectionActionCreators';

const inputStyle = {
  marginRight: '5px'
};

@connect(state => ({name: state.collection.name}))
export default class CollectionRenameForm extends React.Component {
  constructor() {
    super();
    this.state ={
      inputValue: null
    };
  }

  setInputValue(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  }

  handleInputValueChange(event) {
    const inputValue = event.target.value;
    this.setInputValue(inputValue);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const collectionName = this.state.inputValue;
    this.props.dispatch(setCollectionName(collectionName)); this.props.onCancelCollectionNameChange();
  }

  handleFormCancel(event) {
    event.preventDefault();
    const collectionName = this.props.name;
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  }

  componentDidMount() {
    this.refs.collectionName.focus();
  }

  render() {
    let inputValue = this.state.inputValue === null  ? this.props.name : this.state.inputValue;
    return (
      <form className="form-inline" onSubmit={this.handleFormSubmit.bind(this)}>
        <Header text="Collection name:" />
        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange.bind(this)}
            value={inputValue}
            ref="collectionName" />
        </div>
        <Button label="Change" handleClick={this.handleFormSubmit.bind(this)} />
        <Button label="Cancel" handleClick={this.handleFormCancel.bind(this)} />
      </form>
    );
  }
}
