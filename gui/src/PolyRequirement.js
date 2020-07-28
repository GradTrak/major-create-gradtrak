import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import RequirementsArray from './RequirementsArray';
class PolyRequirement extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (field) => (event) => {
    let data = {...this.props.value};
    data[field] = event.target.value;
    this.props.onChange({target:{value: data}});
  }
  getProp = (field) => {
    return this.props.value[field] ||
    {
      type: 'poly',
      name: '',
      id: '',
      numRequired: 1,
      requirements: [],
      hidden: false
    }[field]
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <label for="type">type: </label>
          <select
            name="type"
            value={this.getProp('type')}
            onChange={this.handleFieldChange('type')}
          >
          <option value="course">course</option>
          <option value="multi">multi</option>
          <option value="poly">poly</option>
          <option value="tag">tag</option>
          </select>
        </div>
        <label for="name">PolyRequirement Name: </label>
        <input
          name="name"
          type="text"
          value={this.getProp('name')}
          onChange={this.handleFieldChange('name')}
        />
        <label for="id">Requirement ID: </label>
        <input
          name="id"
          type="text"
          value={this.getProp('id')}
          onChange={this.handleFieldChange('id')}
        />
        <label for="hidden">Hidden: </label>
        <input
          name="hidden"
          type="checkbox"
          value={this.getProp('hidden')}
          onChange={this.handleFieldChange('hidden')}
          checked
        />
        <label for="Requirements">Requirements: </label>
        <RequirementsArray
          value={this.getProp('requirements')}
          onChange={this.handleFieldChange('requirements')}
        />
      </div>
  );
  }
}

export default PolyRequirement;
