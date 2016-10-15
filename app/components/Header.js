import React, { Component } from 'react';

import { AppBar } from 'material-ui';
import OsButtons from './OsButtons';

export default class Header extends Component {
  render() {
    var styles = {
      container: {
        zIndex: 10,
        position: 'fixed',
        width: '100%'
      },

      header: {
        boxShadow: 'none',
        height: '10%',
        maxHeight: 100,
        WebkitAppRegion: 'drag'
      }
    };

    return (
      <div style={styles.container}>
        <AppBar title="tesseract.js"
                style={styles.header}
                touch
                showMenuIconButton={false}
                iconElementRight={<OsButtons />}
        >
        </AppBar>
      </div>
    );
  }
}
