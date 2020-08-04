import React, { Component } from 'react';
import Requirement from './Requirement';
import CourseRequirement from './CourseRequirement';
import TagRequirement from './TagRequirement';
import MultiRequirement from './MultiRequirement';
import PolyRequirement from './PolyRequirement';
import './Requirement.css';
//https://www.sicara.ai/blog/2018-06-27-custom-nested-validated-forms-with-react please just copy this code
class RequirementsArray extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (index) => (event) => {
    let data = [...this.props.value];
    data[index] = event.target.value;
    this.props.onChange({target:{value:data}});
  }
  addReq = (e)=> {
    e.preventDefault();
    let data = [...this.props.value, {name:'', type: 'course'}];
    this.props.onChange({target:{value:data}});
  }
  delReq = index => (e) => {
    e.preventDefault();
    let data = [...this.props.value];
    data.splice(index, 1);
    this.props.onChange({target:{value:data}});
  }
  render() {

    return (
      <span>
        <button onClick={this.addReq}>Add req</button>
        <div>
        {this.props.value.map((req, index) => {
          return (
            <span key={index}>
              <Requirement
                value={req}
                onChange={this.handleFieldChange(index)}
                parent={this.props.parent}
                reqSetId={this.props.reqSetId}
              />
              <button onClick={this.delReq(index)}>Delete req {req.name}</button>
              <br/>
            </span>
        )
        })}
        </div>
      </span>
  );
  }
}

export default RequirementsArray;
