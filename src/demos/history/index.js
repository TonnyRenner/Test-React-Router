import React, { PureComponent } from 'react';
import {
  // HashRouter as Router,
  // MemoryRouter as Router,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Repos from '../../comps/repos';
import About from '../../comps/about';


class History extends PureComponent {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
        <Route path="/about/:id" component={About} />
        <Route path="/repos" component={Repos} />
      </Router>
    );
  }
}

export default History;  