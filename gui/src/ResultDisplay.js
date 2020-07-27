import React, { Component } from 'react';
class Requirement extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    if (this.props.output) {
      return (
        <pre>
          <code>
            {JSON.stringify(this.props.output, null, 2)}
          </code>
        </pre>
    )}
    return null
  }
}

export default Requirement;
