import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import CourseRequirement from './CourseRequirement';
import TagRequirement from './TagRequirement';
import MultiRequirement from './MultiRequirement';
import PolyRequirement from './PolyRequirement';
import './Requirement.css';

class Requirement extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (field) => (event) => {
    let data = {...this.props.value};
    data[field] = event.target.value;
    if (data.type === 'multi') {
      data.id = data.name?('multi'+ data.name).replace(/\W/g, '').toLowerCase():''; //TODO add the requirementSet name
    } else if (data.type === 'poly') {
      data.id = data.name?('poly'+ data.name).replace(/\W/g, '').toLowerCase():'';//TODO add the requirementSet name
    }
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
        parent= {[...this.props.parent, this.getProp('name')]}
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
      <span className="block-example">
        <span>
        <span className="breadcrumb">{this.props.parent.map((thingy) => (thingy.substring(0,5) + "/"))}</span>
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
          <label for="name">req name: </label>
          <input
            name="name"
            type="text"
            value={this.getProp('name')}
            onChange={this.handleFieldChange('name')}
          />
          {requirementComponent}
          </span>
        </span>
      )
  }
}

export default Requirement;
