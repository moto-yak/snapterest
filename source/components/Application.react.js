import React from 'react';
import Stream from './Stream.react';
import Collection from './Collection.react';
import { connect } from 'react-redux';

@connect(state => ({tweets:state.tweets}))
export default class Application extends React.Component {
  render() {
    console.log('Application');
    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream />
          </div>
          <div className="col-md-8">
            <Collection />
          </div>
        </div>
      </div>
    );
  }
}
