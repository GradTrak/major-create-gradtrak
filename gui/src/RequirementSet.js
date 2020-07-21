import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import RequirementCategory from './RequirementCategory'
//https://www.sicara.ai/blog/2018-06-27-custom-nested-validated-forms-with-react please just copy this code
class RequirementSet extends React.Component {
  constructor(props) {
    super(props);
    this.updateId = this.updateId.bind(this);
  }
  state = {
    id: '',
    name: '',
    parentId: '',
    type: 'major',
    RequirementCategories: []
  };
  updateId = (newId) => {
    this.setState({
      ...this.state,
      id: newId.target.value,
    })
  }
  updateName = (newName) => {
    this.setState({
      ...this.state,
      name: newName.target.value,
    })
  }
  updateParentId = (newId) => {
    this.setState({
      ...this.state,
      parentId: newId.target.value,
    })
  }
  updateType = (newType) => {
    this.setState({
      ...this.state,
      type: newType.target.value,
    })
  }
  render() {
    return (
      <form>
        <div>
          <label for="id">id: </label>
          <input
            name="id"
            type="text"
            value={this.state.id}
            onChange={this.updateId}
          />
        </div>
        <div>
          <label for="name">name: </label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.updateName}
          />
        </div>
        <div>
          <label for="parentId">parentId: </label>
          <input
            name="parentId"
            type="text"
            value={this.state.parentId}
            onChange={this.updateParentId}
          />
        </div>
        <div>
          <label for="type">type: </label>
          <select
            name="type"
            value={this.state.type}
            onChange={this.updateType}
          >
          <option value="major">major</option>
          <option value="minor">minor</option>
          <option value="other">other</option>
          </select>
        </div>


      </form>
  );
  }
}

export default RequirementSet;
