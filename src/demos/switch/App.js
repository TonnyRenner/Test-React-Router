import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class APP extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/repos">Link to /repos</Link>
        <br />
        <Link to="/about">Link to /about</Link>
        <br />
        <Link to="/Nick">Link to /Nick</Link>
      </div>
    );
  }
}

export default APP;