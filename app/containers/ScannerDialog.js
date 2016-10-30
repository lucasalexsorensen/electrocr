// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { Circle } from 'rc-progress'
import { Dialog, IconButton } from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { closeScannerDialog } from '../actions/dialogs';

class ScannerDialog extends Component {
  renderContent(){
    if (!this.props.scans.result.text){
      return(
        <div>
          <h3 style={{textAlign: 'center', position: 'absolute', width: '100%', marginTop: 140, transform: 'translate(-5%)'}}>
            {this.props.scans.progress.toFixed(2)*100}%
          </h3>
          <Circle percent={(this.props.scans.progress*100)} strokeWidth="4" />
        </div>
      )
    }else{
      return(
        <div>
          <h3 style={{textAlign: 'center', margin:0, padding:0}}>Result:</h3>
          <p>
            {this.props.scans.result.text}
          </p>
        </div>
      )
    }
  }

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
      <Dialog autoScrollBodyContent open={this.props.dialogState}>
        <IconButton onClick={() => this.props.closeScannerDialog()} style={styles.closeIcon}>
          <NavigationClose />
        </IconButton>

        {this.renderContent()}


      </Dialog>
    );
  }
}

function mapStateToProps(state){
  return {
    dialogState: state.dialogs.scanner,
    scans: state.scans
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    closeScannerDialog
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScannerDialog);
