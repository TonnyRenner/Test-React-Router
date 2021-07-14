import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import About from '../../comps/about';
import Repos from '../../comps/repos';
import App from './App';

require('./style.css');



function AnimationApp() {
  let location = useLocation();

  return (
    <div className="transition-group">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="transition-comp"
          timeout={1000}
        // transitionEnterTimeout={500}
        >
          <Switch>
            <Route exact path="/about/:id" component={About} />
            <Route exact path="/repos" component={Repos} />
            <Route exact path="/" component={App} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default function AnimationExample() {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}
