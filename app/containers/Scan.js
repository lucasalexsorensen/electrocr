// @flow
import React, { Component } from 'react';

import { Link } from 'react-router'

export default class Scan extends Component {
  render() {
    return (
      <div>
        <h1>scan</h1>
        <Link to="/settings">go to settings</Link>
      </div>
    );
  }
}
