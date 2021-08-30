import React, { Component ,useState} from 'react';
import './App.css';
import './App.js';
import {  Button,ButtonGroup,Container, Table } from 'reactstrap';
import Popup from './Popup';

export class Properties extends Component {

  state = {
    properties: []
  };

  async componentDidMount() {
    const response = await fetch('/getAllProperty');
    const body = await response.json();
    this.setState({properties: body});
  }

  async remove(id) {
    await fetch(`/delProperty/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedGroups = [...this.state.properties].filter(i => i.id !== id);
      this.setState({properties: updatedGroups});
    });
  }

  render() {
    const {properties, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

      const propertyList = properties.map(properties => {
      const name = `${properties.name} `;
      const location = `${properties.location} `;
      const id = `${properties.id} `;
      
      return <tr key={properties.id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" >Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(properties.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });
  
  return (
    <div>
       <div className="float-right">
            <Button color="success" >Add Property</Button>
      </div>
      <Container fluid>
        <h3>Property List</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {propertyList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
  }
}
