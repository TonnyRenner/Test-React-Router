import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class APP extends PureComponent {
  render() {
    console.log('APP, this.props.history', this.props.history);
    const activeStyle = {
      fontWeight: 'bold',
      color: 'red'
    };
    return (
      <div>
        <NavLink exact to="/about/12" activeStyle={activeStyle}>跳转至About, id=12.</NavLink>
        <br />
        <NavLink exact to="/about/11" activeStyle={activeStyle}>跳转至About, id=11.</NavLink>
        <br />
        <NavLink to="/about" activeStyle={activeStyle}>跳转至About.</NavLink>
        <br />
        <NavLink exact to="/repos/1" activeStyle={activeStyle}>跳转至Repos/1.</NavLink>
        <br />
        <NavLink
          exact
          to="/repos/2"
          activeStyle={activeStyle}
          location={{}}
        >
          跳转至Repos/2.
        </NavLink>
      </div>
    );
  }
}

export default APP;