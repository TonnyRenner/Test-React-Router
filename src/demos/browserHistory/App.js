import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class APP extends PureComponent {
  render() {
    console.log('APP, this.props.history', this.props.history);
    return (
      <div>
        <Link
          to={{
            pathname: "/repos",
            state: {
              repos: 1
            }
          }}
        >
          跳转至Repos
        </Link>
        <button
          onClick={() => {
            this.props.history.push({
              pathname: '/about',
              state: {
                about: 22
              }
            })
          }}
        >
          跳转至About
        </button>

        <button onClick={() => { this.props.history.goBack(); }}>返回上一页</button>
      </div>
    );
  }
}

export default APP;