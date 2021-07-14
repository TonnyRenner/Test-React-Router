import React, { PureComponent } from 'react';

class About extends PureComponent {
  componentDidMount() {
    console.log('About, this.props.history', this.props.history);
  }

  render() {
    return (
      <h2>About</h2>
    );
  }
}

export default About;