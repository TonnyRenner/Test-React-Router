import React, { PureComponent } from 'react';

class Repos extends PureComponent {
  render() {
    console.log('Repos, this.props.history', this.props.history);
    return (
      <h2>Repos</h2>
    );
  }
}

export default Repos; 