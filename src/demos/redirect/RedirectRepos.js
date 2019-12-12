import React, { PureComponent } from 'react';

class RedirectRepos extends PureComponent {
  render() {
    console.log('RedirectRepos, this.props.history', this.props.history);
    return (
      <h2>RedirectRepos</h2>
    );
  }
}

export default RedirectRepos;