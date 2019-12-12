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
import Signin from './SignIn';
import RedirectRepos from './RedirectRepos';

class History extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Redirect 得放在 Route 前, 匹配规则从上到下 */}
          <Redirect from='/repos' to='/redirectRepos' />
          <Route exact path="/about/:id" component={About} />
          <Route exact path="/repos" component={Repos} />
          <Route exact path="/signIn" component={Signin} />
          <Route exact path="/redirectRepos" component={RedirectRepos} />
          <Route
            exact
            path="/"
            render={() => (
              !!Cookies.get('is_login') ?
                <App /> :
                <Redirect
                  to={{
                    pathname: '/signIn',
                    search: '?is_login=1',
                    state: {
                      type: 1
                    }
                  }}
                  push={true}
                />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default History;