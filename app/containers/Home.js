// @flow
import React, { Component } from 'react';

import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <Link to="/scan">go to scan</Link>
      </div>
    );
  }
}
