import React, { PureComponent } from 'react';
import Cookies from 'js-cookie';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import About from '../../comps/about';
import Repos from '../../comps/repos';
import App from './App';

const NoMatch = () => {
  return <h1>Page lost.</h1>
}

const User = ({ match }) => {
  return (
    <h1>Hello, User-{match.params.username}</h1>
  );
}

class History extends PureComponent {
  render() {
    return (
      // // 没有 switch
      // <BrowserRouter>
      //   <Route path="/about" component={About} />
      //   <Route path="/:username" component={User} />
      //   <Route component={App} />
      // </BrowserRouter>

      // 带有 switch
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/user/:username" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default History;
