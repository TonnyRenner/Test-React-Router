import React, { PureComponent } from 'react';
import {
  // HashRouter as Router,
  // MemoryRouter as Router,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Repos from './Repos';
import About from './About';


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