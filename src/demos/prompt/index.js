import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  MemoryRouter,
  Route
} from 'react-router-dom';

import App from './App';
import About from '../../comps/about';
import Repos from '../../comps/repos';
import Prompt from './Prompt';

class History extends PureComponent {
  render() {
    return (
      <MemoryRouter
        getUserConfirmation={(message, callback) => {
          console.log('getUserConfirmation', message);
          const allowTransition = window.confirm(message);
          callback(allowTransition);
        }}
      >
        <Route path="/prompt" component={Prompt} />
        <Route path="/about/:id" component={About} />
        <Route path="/repos" component={Repos} />
        <Route path="/" component={App} />
      </MemoryRouter>
    );
  }
}

export default History;  