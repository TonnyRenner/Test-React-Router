import React from 'react';
import ReactDOM from 'react-dom';

import History from './demos/history';
import BrowserHistory from './demos/browserHistory';
import HashHistory from './demos/hashHistory';
import MemoryHistory from './demos/memoryHistory';
import Link from './demos/link';
import NavLink from './demos/navLink';
import Prompt from './demos/prompt';
import Redirect from './demos/redirect';
import Route from './demos/route';
import Switch from './demos/switch';
// import Location from './demos/location';

// import AnimateDemo from './demos/animatedTramsitions';
import TransitionGroup from './demos/transitionGroup';

ReactDOM.render(<HashHistory />, document.getElementById('root'));