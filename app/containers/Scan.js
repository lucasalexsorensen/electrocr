// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import { RaisedButton } from 'material-ui'
import ActionFlipToBack from 'material-ui/svg-icons/action/flip-to-back';
import FileUpload from 'material-ui/svg-icons/file/file-upload';

import { openFileUploadDialog } from '../actions/dialogs';

import Dropzone from './Dropzone';

class Scan extends Component {
  render() {
    var styles={
      page: {
        textAlign: 'center',
        paddingTop: 40
      },

      button: {
        margin: 12
      },

      imageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
    };

    return (
      <div style={styles.page}>
        <h4 style={{ textAlign: 'center', fontWeight: 700, fontSize: 24 }}>Scanning</h4>

        <RaisedButton
          //onClick={() => this.props.openFileUploadDialog()}
          label="file"
          icon={<FileUpload />}
          primary={true}
          style={styles.button}
        >
          <input type="file" style={styles.imageInput} />
        </RaisedButton>
        <br/>
        <RaisedButton
          label="screencap"
          icon={<ActionFlipToBack />}
          primary={true}
          style={styles.button}
        />

        <br/><br/>

        <div style={{borderRadius: 20, marginRight: 'auto', marginLeft: 'auto', display: 'block', width: '80%', height: '300px', border: '2px dotted grey'}}>
          <Dropzone />
        </div>

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
