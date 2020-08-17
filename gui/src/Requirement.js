import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import CourseRequirement from './CourseRequirement';
import TagRequirement from './TagRequirement';
import MultiRequirement from './MultiRequirement';
import PolyRequirement from './PolyRequirement';
import UnitRequirement from './UnitRequirement';
import CountRequirement from './CountRequirement';
import './Requirement.css';

class Requirement extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (field) => (event) => {
    let data = {...this.props.value};
    if (event.target.name === 'type') {
      data = {
        name: data.name,
      }
    }
    data[field] = event.target.value;
    if (data.type === 'multi') {
      data.id = data.name?((this.props.reqSetId || '') + 'multi'+ data.name).replace(/\W/g, '').toLowerCase():'';
    } else if (data.type === 'poly') {
      data.id = data.name?((this.props.reqSetId || '') + 'poly'+ data.name).replace(/\W/g, '').toLowerCase():'';
    } else if (data.type === 'unit') {
      data.id = data.name?((this.props.reqSetId || '') + 'unit'+ data.name).replace(/\W/g, '').toLowerCase():'';
    } else if (data.type === 'count') {
      data.id = data.name?((this.props.reqSetId || '') + 'count'+ data.name).replace(/\W/g, '').toLowerCase():'';
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
        parent= {[...this.props.parent, this.getProp('name')]}
      />
        break;
      case 'unit':
        requirementComponent = <UnitRequirement
        value= {req}
        onChange={this.updateRequirement}
        parent= {[...this.props.parent, this.getProp('name')]}
      />
        break;
      case 'count':
        requirementComponent = <CountRequirement
        value= {req}
        onChange={this.updateRequirement}
        parent= {[...this.props.parent, this.getProp('name')]}
      />
        break;
      case 'tag':
        requirementComponent = <TagRequirement
        value= {req}
        onChange={this.updateRequirement}
        parent= {[...this.props.parent, this.getProp('name')]}
      />
        break;
      default:
        alert(`Error: unknown requirement type: ${req.type}. context: ${this.props.parent}`)
        requirementComponent = <Requirement
        value= {{
          ...req,
          type: 'course'
          }}
        onChange={this.updateRequirement}
        />
    };
    return (
      <span className="block-example">
        <span>
        <span className="breadcrumb">{this.props.parent.map((thingy) => (thingy.substring(0,9) + "/"))}</span>
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
          <option value="unit">unit</option>
          <option value="count">count</option>
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
