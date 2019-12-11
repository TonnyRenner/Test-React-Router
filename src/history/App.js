import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class APP extends PureComponent {
  render() {
    console.log('APP, this.props.history', this.props.history);
    return (
      <div>
        <h2>APP</h2>
        <p>
          <Link to="/about/12?pageNo=1">跳转至About</Link>
        </p>
      </div>
    );
  }
}

export default APP; 