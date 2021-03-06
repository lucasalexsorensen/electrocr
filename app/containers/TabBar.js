import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';

import { push } from 'react-router-redux'

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFindInPage from 'material-ui/svg-icons/action/find-in-page';
import ActionSettingsApplications from 'material-ui/svg-icons/action/settings-applications';

class TabBar extends Component {
  render() {
    var styles = {
      tabBar: {
        backgroundColor: '#eee',
        boxShadow: 'none',
        overflowX: 'hidden',
        zIndex: '20',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
      },
    };

    return (
      <Tabs
        value={this.props.routing.locationBeforeTransitions.pathname}
        onChange={(value) => {this.props.routerPush(value)}}
        style={styles.tabBar}
      >
        <Tab
          value="/"
          icon={<ActionFindInPage />}
          label="SCANNING"
        />
        <Tab
          value="/settings"
          icon={<ActionSettingsApplications />}
          label="SETTINGS"
        />

      </Tabs>
    );
  }
}

function mapStateToProps(state){
  return {
    routing: state.routing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    routerPush: push
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
