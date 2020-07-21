import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>ID</Form.Label>
          <Form.Text className="text-muted">
            i.e. "eecs for EECS major or linguis100 for Linguistics 100"
          </Form.Text>
          <Form.Control type="email" placeholder="name@example.com" />
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
            <option>course</option>
            <option>multi</option>
            <option>unit</option>
            <option>poly</option>
            <option>tag</option>
          </Form.Control>
        </Form.Group>
      </Form>
      </header>
    </div>
  );
}

export default App;
