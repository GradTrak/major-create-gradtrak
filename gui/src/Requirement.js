import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class Requirement extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (field) => (event) => {
    let data = {...this.props.value};
    data[field] = event.target.value;
    this.props.onChange({target:{value: data}});
  }
  render() {
    return (
      <p>Requirement</p>
  );
  }
}

export default Requirement;
