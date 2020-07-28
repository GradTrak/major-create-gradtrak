import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import RequirementsArray from './RequirementsArray';
class RequirementCategory extends React.Component {
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
      <div>
        <Row>
          <Col>
            <label for="name">Requirement Category Name: </label>
            <input
              name="name"
              type="text"
              value={this.props.value.name}
              onChange={this.handleFieldChange('name')}
            />
            <RequirementsArray
              value={this.props.value.requirements}
              onChange={this.handleFieldChange('requirements')}
            />
          </Col>
        </Row>
      </div>
  );
  }
}

export default RequirementCategory;
