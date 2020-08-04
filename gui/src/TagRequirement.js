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
