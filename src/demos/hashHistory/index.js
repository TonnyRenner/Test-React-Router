import React, { PureComponent } from 'react';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';

import App from './App';
import About from '../../comps/about';
import Repos from '../../comps/repos';


class History extends PureComponent {
  // // TODO: 这里待确认
  // getConfirmation = (message, callback) => {
  //   const allowTransition = window.confirm(message);
  //   callback(allowTransition);
  // }

  render() {
    const supportsHistory = 'pushState' in window.history;
    console.log('supportsHistory', supportsHistory);
    return (
      <HashRouter
        basename="hash"
        // getUserConfirmation={this.getConfirmation}
        // hashType="slash"
        // hashType="noslash"
        hashType="hashbang"
        keyLength={10}
      >
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/repos" component={Repos} />
          <Route path="/" component={App} />
        </Switch>
      </HashRouter>
    );
  }
}

export default History;  