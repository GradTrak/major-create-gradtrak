import React, { Component } from 'react';
class CourseRequirement extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (field) => (event) => {
    let data = {...this.props.value};
    data[field] = event.target.value;
    if (field === 'courseId') {
      data.id = data[field];
    }
    this.props.onChange({target:{value: data}});
  }
  getProp = (field) => {
    return this.props.value[field] ||
    {
      type: 'course',
      name: '',
      courseId: ''
    }[field]
  }
  render() {
    return (
      <span>
        <label for="courseId">courseId: </label>
        <input
          name="courseId"
          type="text"
          value={this.getProp('courseId')}
          onChange={this.handleFieldChange('courseId')}
        />
      </span>
  );
  }
}

export default CourseRequirement;
