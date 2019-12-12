import React, { PureComponent } from 'react';

class About extends PureComponent {
  render() {
    console.log('About, this.props.history', this.props.history);
    console.log('About, this.props', this.props);
    return (
      <h2>About</h2>
    );
  }
}

export default About;