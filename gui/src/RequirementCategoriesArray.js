import React, { Component } from 'react';
import RequirementCategory from './RequirementCategory'
//https://www.sicara.ai/blog/2018-06-27-custom-nested-validated-forms-with-react please just copy this code
class RequirementCategoriesArray extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  handleFieldChange = (index) => (event) => {
    let data = [...this.props.value];
    data[index] = event.target.value;
    this.props.onChange({target:{value:data}});
  }
  render() {
    return (
      this.props.value.map((reqCategory, index) => {
        return <RequirementCategory
          key={reqCategory.name}
          value= {reqCategory}
          onChange={this.handleFieldChange(index)}
        />
      })
  );
  }
}

export default RequirementCategoriesArray;
