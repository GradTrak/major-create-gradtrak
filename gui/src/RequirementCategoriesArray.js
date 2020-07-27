import React, { Component } from 'react';
import RequirementCategory from './RequirementCategory'
//https://www.sicara.ai/blog/2018-06-27-custom-nested-validated-forms-with-react please just copy this code
class RequirementCategoriesArray extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.addReqCategory = this.addReqCategory.bind(this);
  }
  handleFieldChange = (index) => (event) => {
    let data = [...this.props.value];
    data[index] = event.target.value;
    this.props.onChange({target:{value:data}});
  }
  addReqCategory = (e)=> {
    e.preventDefault();
    let data = [...this.props.value, {name:'', requirements: []}];
    this.props.onChange({target:{value:data}});
  }
  delReqCategory = index => (e) => {
    e.preventDefault();
    let data = [...this.props.value];
    data.splice(index, 1);
    this.props.onChange({target:{value:data}});
  }
  render() {
    return (
      <div>
        <button
          onClick={this.addReqCategory}>Add a requirement Category</button>
          {this.props.value.map((req, index) => {
            return (<div key={index}>
              <button
                onClick={this.delReqCategory(index)}>Delete this requirement Category</button>
              <RequirementCategory
              value= {req}
              onChange={this.handleFieldChange(index)}
            />
              </div>
          )
          })}
      </div>
    );
  }
}

export default RequirementCategoriesArray;
