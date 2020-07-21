import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class RequirementSet extends React.Component {
  render() {
    return (
      <Form>
      <Form.Group controlId="RequirementSet">
        <Form.Label>ID:</Form.Label>
        <Form.Text className="text-muted">
        </Form.Text>
        <Form.Control size="lg" type="text" placeholder="bioengineering" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <Form.Text className="text-muted">
          i.e. "Linguistics Major"
        </Form.Text>
        <Form.Control />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Type:</Form.Label>
        <Form.Control as="select">
          <option>major</option>
          <option>minor</option>
          <option>other</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
  }
}

export default RequirementSet;
