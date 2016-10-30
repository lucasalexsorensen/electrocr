// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

// material ui
import { MuiThemeProvider } from 'material-ui'


// tap event plugin
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

// containers:
import App from './containers/App'
import Scan from './containers/Scan'
import Settings from './containers/Settings'


render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
        <Route component={App}>
          <IndexRedirect to="/" />
          <Route path="/">
            <IndexRoute component={Scan} />
          </Route>
          <Route path="/settings">
            <IndexRoute component={Settings} />
          </Route>

        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
