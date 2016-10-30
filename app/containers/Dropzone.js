import React, { Component } from 'react';

import { connect } from 'react-redux';
import{ bindActionCreators } from 'redux';

import { startScanFile } from '../actions/scans';

var ReactDropzone = require('react-dropzone');

class Dropzone extends Component {
  render() {
    return (
      <ReactDropzone
        onDrop={(files) => this.props.startScanFile(files[0].path)}
        style={{marginLeft: 'auto', marginRight: 'auto', height: '100%', width: 'auto', lineHeight: '280px'}}
      >
        <div>or drop files here</div>
      </ReactDropzone>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    startScanFile
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Dropzone)
