import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import RequirementsArray from './RequirementsArray';
class MultiRequirement extends React.Component {
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
      type: 'multi',
      name: '',
      id: '',
      numRequired: 0,
      requirements: [],
      hidden: false
    }[field]
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <label for="numRequired">numRequired: </label>
        <input
          name="numRequired"
          type="number"
          value={this.getProp('numRequired')}
          onChange={this.handleFieldChange('numRequired')}
        />
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
      </div>
  );
  }
}

export default MultiRequirement;
