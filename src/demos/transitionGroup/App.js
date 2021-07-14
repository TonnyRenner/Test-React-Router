import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class APP extends PureComponent {
  render() {
    console.log('App, render');
    return (
      <div className="page-app">
        <Link to="/about/12">跳转至About</Link>
        <br />
        <Link to="/repos">跳转至Repos</Link>
        <br />
        <Link to="/prompt">跳转至Prompt</Link>
      </div>
    );
  }
}

export default APP;