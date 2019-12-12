import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Cookies from 'js-cookie';

import About from '../../comps/about';
import Repos from '../../comps/repos';
import App from './App';

require('./style.css');

const User = ({ match, location, history }) => {
  console.log('User', location, history);
  return (
    <div>
      <h1>Hello {match.params.username}!</h1>
    </div>
  )
};

const Login = ({ history }) => {
  return (
    <div>
      <h2>需要登录后使用</h2>
      <button onClick={() => { Cookies.set('is_login', '1'); }}>点击登录</button>
      <button onClick={() => { history.goBack(); }}>返回上一页</button>
    </div>
  );
};

// 包装
const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!!Cookies.get('is_login') || props.location.pathname.startsWith('/login')) {
        return <Component {...props} />;
      }
      return (
        <Redirect to="/login" push />
      );
    }}
  />
);

// children
const ListItemLink = ({ to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <div className={match ? 'active' : ''}>
        I'm {to}.
      </div>
    )}
  />
);

class History extends PureComponent {
  render() {
    return (
      // component 方式
      <BrowserRouter>
        <Switch>
          <Route strict path="/user/:username/" component={User} />
          <Route sensitive path="/About" component={About} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>

      // // 包装 方式
      // <BrowserRouter>
      //   <Switch>
      //     <LoginRoute path="/login" component={Login} />
      //     <LoginRoute path="/" component={App} />
      //   </Switch>
      // </BrowserRouter>

      // // children 方式
      // <BrowserRouter>
      //   <ListItemLink to="/user" />
      //   <ListItemLink to="/login" />
      // </BrowserRouter>
    );
  }
}

export default History;