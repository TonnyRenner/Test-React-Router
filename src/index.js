import React from 'react';
import ReactDOM from 'react-dom';

import History from './history';
import BrowserHistory from './browserHistory';
import HashHistory from './hashHistory';
import MemoryHistory from './memoryHistory';
import Link from './link';
import NavLink from './navLink';

ReactDOM.render(<NavLink />, document.getElementById('root'));