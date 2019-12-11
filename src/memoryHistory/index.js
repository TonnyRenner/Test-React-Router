import React, { PureComponent } from 'react';
import {
  MemoryRouter,
  Switch,
  Route
} from 'react-router-dom';

import App from './App';
import About from '../about';
import Repos from '../repos';


class History extends PureComponent {

  render() {
    return (
      <MemoryRouter
        initialIndex={1}
        initialEntries={['/about', { pathname: '/repos' }]}
      >
        <Route path="/about" component={About} />
        <Route path="/repos" component={Repos} />
        <Route path="/" component={App} />
      </MemoryRouter>
    );
  }
}

export default History;  