import React, { PureComponent } from 'react';

class Repos extends PureComponent {
  componentDidMount() {
    console.log('Repos, this.props.history', this.props.history);
  }

  render() {
    return (
      <h2>Repos</h2>
    );
  }
}

export default Repos;