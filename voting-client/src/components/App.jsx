import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  vote: function (entry) {alert(`Vote: ${entry}`)},
  render: function() {
    return React.cloneElement(this.props.children, {vote: this.vote, pair: pair});
  }
});
