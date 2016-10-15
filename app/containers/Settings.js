// @flow
import React, { Component } from 'react';

import { Link } from 'react-router'

export default class Settings extends Component {
  render() {
    return (
      <div>
        <h1>settings</h1>
        <Link to="/">go to home</Link>
      </div>
    );
  }
}
