// @flow
import React, { Component, PropTypes } from 'react';

import Header from '../components/Header'
import ScannerDialog from '../containers/ScannerDialog'
import FileUploadDialog from '../containers/FileUploadDialog'
import TabBar from '../containers/TabBar'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="app">
        <header>
          <Header />
        </header>

        <main>
          <ScannerDialog />
          <FileUploadDialog />
          {this.props.children}
        </main>

        <footer>
          <TabBar />
        </footer>
      </div>
    );
  }
}
