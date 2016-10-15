// @flow
import React, { Component } from 'react';

import { Link } from 'react-router'

export default class Home extends Component {
  render() {
    var styles = {
      page: {
        textAlign: 'center'
      }
    }

    return (
      <div style={styles.page}>
        <h1>home</h1>
      </div>
    );
  }
}
