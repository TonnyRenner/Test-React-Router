import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class APP extends PureComponent {
  render() {
    console.log('APP, this.props.history', this.props.history);
    return (
      <div>
        <Link
          to={{
            pathname: '/repos'
          }}
        >
          跳转至Repos
        </Link>
        <button
          onClick={() => {
            this.props.history.push({
              pathname: '/about'
            })
          }}
        >
          跳转至About
        </button>
      </div>
    );
  }
}

export default APP;