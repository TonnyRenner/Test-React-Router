// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import {
//   // HashRouter as Router,
//   // MemoryRouter as Router,
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import {
//   createBrowserHistory, createMemoryHistory, createHashHistory
// } from 'history';

// import App from './App';
// import Repos from './Repos';
// import About from './About';

// render((
//   <Router>
//     <Route path="/" component={App} />
//     <Route path="/repos/:id" component={Repos} />
//     <Route path="/about/:id" component={About} />
//   </Router>
// ), document.getElementById('application'));

import React, { PureComponent } from 'react';
// import { render } from 'react-dom';
import {
  HashRouter as Router,
  // MemoryRouter as Router,
  // BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import {
//   createBrowserHistory, createMemoryHistory, createHashHistory
// } from 'history';

import App from './App';
import Repos from './Repos';
import About from './About';


class History extends PureComponent {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
        <Route path="/repos/:id" component={Repos} />
        <Route path="/about/:id" component={About} />
      </Router>
    );
  }
}

export default History;  