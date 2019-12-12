import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import App from './App';
import About from '../../comps/about';
import Repos from '../../comps/repos';


class History extends PureComponent {
  render() {
    const supportsHistory = 'pushState' in window.history;
    console.log('supportsHistory', supportsHistory);
    return (
      <BrowserRouter
        basename="browser"
        forceRefresh={!supportsHistory}
        keyLength={10}
      >
        {/* <Switch> */}
          <Route path="/about" component={About} />
          <Route path="/repos" component={Repos} />
          <Route path="/" component={App} />
        {/* </Switch> */}
      </BrowserRouter>
    );
  }
}

export default History;  