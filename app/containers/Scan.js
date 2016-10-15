// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import { RaisedButton } from 'material-ui'
import ActionFlipToBack from 'material-ui/svg-icons/action/flip-to-back';
import FileUpload from 'material-ui/svg-icons/file/file-upload';

import { openFileUploadDialog } from '../actions/dialogs';

class Scan extends Component {
  render() {
    var styles={
      page: {
        textAlign: 'center',
        paddingTop: 40
      },

      button: {
        margin: 12
      }
    };

    return (
      <div style={styles.page}>
        <h4 style={{ textAlign: 'center', fontWeight: 700, fontSize: 24 }}>Scanning</h4>

        <RaisedButton
          onClick={() => this.props.openFileUploadDialog()}
          label="file"
          icon={<FileUpload />}
          primary={true}
          style={styles.button}
        />
        <br/>
        <RaisedButton
          label="screencap"
          icon={<ActionFlipToBack />}
          primary={true}
          style={styles.button}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    openFileUploadDialog
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Scan)
