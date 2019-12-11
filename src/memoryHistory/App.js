import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class APP extends PureComponent {
  render() {
    console.log('APP, this.props.history', this.props.history);
    return (
      <div>
        <button onClick={() => { this.props.history.goBack(); }}>返回上一页</button>
      </div>
    );
  }
}

export default APP;