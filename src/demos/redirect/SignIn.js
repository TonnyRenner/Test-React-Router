import React, { PureComponent } from 'react';
import Cookies from 'js-cookie';

class SignIn extends PureComponent {
  render() {
    console.log('SignIn', this.props.location);
    return (
      <div>
        <button onClick={() => { Cookies.set('is_login', 1); }}>增加cookie</button>
        <button
          onClick={() => {
            // this.props.history.replace("/");
            this.props.history.goBack();
          }}
        >
          返回首页
        </button>
      </div>
    );
  }
}

export default SignIn;