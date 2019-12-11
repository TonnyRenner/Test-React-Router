import React, { PureComponent } from 'react';

class About extends PureComponent {
  render() {
    console.log('About, this.props.history', this.props.history);
    return (
      <h2>About</h2>
    );
  }
}

export default About; 