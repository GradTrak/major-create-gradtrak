import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import RequirementsArray from './RequirementsArray';
import Requirement from './Requirement'
class MultiRequirement extends React.Component {
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
    if (field === "units") {
        data[field] = Number(event.target.value)
    }
    this.props.onChange({target:{value: data}});
  }
  getProp = (field) => {
    console.log('field is', field, 'value is')
    return this.props.value[field] ||
    {
      type: 'unit',
      name: '',
      id: '',
      units: 0,
      requirement: {
        type: 'course'
      },
    }[field]
  }
  render() {
    return (
      <span>
        <label for="units">units: </label>
        <input
          name="units"
          type="number"
          value={this.getProp('units')}
          onChange={this.handleFieldChange('units')}
          id='num'
        />
        <label for="Requirement">Requirement: </label>
        <Requirement
          value={this.getProp('requirement')}
          onChange={this.handleFieldChange('requirement')}
          parent={this.props.parent}
        />
      </span>
  );
  }
}

export default MultiRequirement;
