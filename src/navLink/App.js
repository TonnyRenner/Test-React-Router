import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class APP extends PureComponent {
  // 只有当事件 id 为奇数时才考虑激活
  oddEvent = () => {
    const { match } = this.props;
    console.log('match', match, this.props);
    // if (!match) {
    //   return false;
    // }
    // const eventID = parseInt(match.params.id);
    // return !isNaN(eventID) && eventID % 2 === 1;
  }

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
        <NavLink exact to="/repos/1" activeStyle={activeStyle} isActive={this.oddEvent}>跳转至Repos/1.</NavLink>
        <br />
        <NavLink
          exact
          to="/repos/2"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log('match&location', match, location);
          }}
        >
          跳转至Repos/2.
        </NavLink>
      </div>
    );
  }
}

export default APP;