import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import App from './App';
import About from '../about';
import Repos from '../repos';


class History extends PureComponent {
  // TODO: 这里待确认
  getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }

  render() {
    const supportsHistory = 'pushState' in window.history;
    console.log('supportsHistory', supportsHistory);
    return (
      <BrowserRouter
        basename="browser"
        forceRefresh={!supportsHistory}
        getUserConfirmation={this.getConfirmation}
        keyLength={10}
      >
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/repos" component={Repos} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default History;  