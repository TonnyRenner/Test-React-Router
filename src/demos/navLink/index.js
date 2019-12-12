import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import App from './App';
import About from '../../comps/about';
import Repos from '../../comps/repos';

class History extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about/:id" component={About} />
        <Route path="/about" component={About} />
        <Route path="/repos/:repoId" component={Repos} />
        <Route path="/" component={App} />
      </BrowserRouter>
    );
  }
}

export default History;  