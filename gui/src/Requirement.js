import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import CourseRequirement from './CourseRequirement';
import TagRequirement from './TagRequirement';
import MultiRequirement from './MultiRequirement';
import PolyRequirement from './PolyRequirement';
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
  updateRequirement = (event) => {
    let data = {...event.target.value};
    this.props.onChange({target:{value: data}})
  }
  getProp = (field) => {
    return this.props.value[field] ||
    {
      type: 'course',
      name: '',
    }[field]
  }
  render() {
    let requirementComponent;
    const req = this.props.value;
    switch (req.type) {
      case 'course':
        requirementComponent = <CourseRequirement
        value= {req}
        onChange={this.updateRequirement}
      />
        break;
      case 'multi':
        requirementComponent = <MultiRequirement
        value= {req}
        onChange={this.updateRequirement}
      />
        break;
      case 'poly':
        requirementComponent = <PolyRequirement
        value= {req}
        onChange={this.updateRequirement}
      />
        break;
      case 'tag':
        requirementComponent = <TagRequirement
        value= {req}
        onChange={this.updateRequirement}
      />
        break;
      default:
        requirementComponent = <Requirement
        value= {req}
        onChange={this.updateRequirement}
        />
    };
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
          {requirementComponent}
        </div>
      )
  }
}

export default Requirement;
