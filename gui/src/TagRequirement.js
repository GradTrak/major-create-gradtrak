import React, { Component } from 'react';
class TagRequirement extends React.Component {
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
      type: 'tag',
      name: '',
      id: '',
      tag: ''
    }[field]
  }
  render() {
    return (
      <div>
      <div>
        <label for="type">type: </label>
        <select
          name="type"
          value={this.props.value.type}
          onChange={this.handleFieldChange('type')}
        >
        <option value="course">course</option>
        <option value="multi">multi</option>
        <option value="poly">poly</option>
        <option value="tag">tag</option>
        </select>
      </div>
        <label for="name">Requirement Name: </label>
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
        <label for="tagId">Tag Id: </label>
        <input
          name="tagId"
          type="text"
          value={this.getProp('tagId')}
          onChange={this.handleFieldChange('tagId')}
        />
      </div>
  );
  }
}

export default TagRequirement;
