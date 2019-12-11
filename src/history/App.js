import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class APP extends PureComponent {
  onPushState = () => {
    this.props.history.push({
      pathname: '/repos',
      state: {
        id: 3
      }
    });
  }

  onReplaceState = () => {
    this.props.history.replace({
      pathname: '/repos',
      state: {
        id: 2
      }
    });
  }

  render() {
    console.log('APP, this.props.history', this.props.history);
    return (
      <div>
        <h2>APP</h2>
        <button onClick={this.onPushState}>push to repos.</button>
        <button onClick={this.onReplaceState}>replace to repos.</button>
        <p>
          <Link to="/about/12?pageNo=1">跳转至About</Link>
        </p>
        {/* <p>
          <Link to="/repos/12?pageNo=1">跳转至Repos</Link>
        </p> */}
      </div>
    );
  }
}

export default APP; 