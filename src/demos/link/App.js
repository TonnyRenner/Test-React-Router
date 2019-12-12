import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

require('./style.css');

class APP extends PureComponent {
  render() {
    console.log('APP, this.props.history', this.props.history);
    return (
      <div>
        <Link
          replace
          to={{
            pathname: '/repos',
            search: '?id=12',
            hash: '#repo-hash',
            state: {
              fromDashboard: true
            }
          }}
          innerRef={(node) => { this.refNode = node }}
          className="link-item"
          title="link-to-repos"
        >
          跳转至Repos
        </Link>

        <button onClick={() => { console.log('this.refNode', this.refNode); }}>获取底层组件</button>
      </div>
    );
  }
}

export default APP;