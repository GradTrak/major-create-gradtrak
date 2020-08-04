import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import RequirementsArray from './RequirementsArray';
class PolyRequirement extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (field) => (event) => {
    if (field === "hidden") {
      let data = {...this.props.value};
      data[field] = event.target.checked;
      return this.props.onChange({target:{value: data}});
    }
    let data = {...this.props.value};
    data[field] = event.target.value;
    if (field === "numRequired") {
        data[field] = Number(event.target.value)
    }
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
    return (
      <span>
        <label for="hidden">Hidden: </label>
        <input
          name="hidden"
          type="checkbox"
          value={this.getProp('hidden')}
          onChange={this.handleFieldChange('hidden')}
        />
        <label for="Requirements">Requirements: </label>
        <RequirementsArray
          value={this.getProp('requirements')}
          onChange={this.handleFieldChange('requirements')}
          parent={this.props.parent}
        />
      </span>
  );
  }
}

export default PolyRequirement;
