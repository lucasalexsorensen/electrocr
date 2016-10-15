// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { Dialog, IconButton } from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { closeFileUploadDialog } from '../actions/dialogs';

class FileUploadDialog extends Component {
  render() {
    var styles = {
      page: {
        textAlign: 'center'
      },

      closeIcon: {
        position: 'absolute',
        right: 0,
        top: 5
      }
    };

    return (
      <Dialog title="Choose a file" autoScrollBodyContent open={this.props.dialogState}>
        <IconButton onClick={() => this.props.closeFileUploadDialog()} style={styles.closeIcon}>
          <NavigationClose />
        </IconButton>

      </Dialog>
    );
  }
}

function mapStateToProps(state){
  return {
    dialogState: state.dialogs.fileUpload
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    closeFileUploadDialog
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUploadDialog);
