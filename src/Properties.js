import React, { Component } from 'react';
import './App.css';
import {  Container, Table } from 'reactstrap';

export class Properties extends Component {

  state = {
    properties: []
  };

  async componentDidMount() {
    const response = await fetch('/getAllProperty');
    const body = await response.json();
    this.setState({properties: body});
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
      </tr>
    });

  return (
    <div>
      <Container fluid>
        <h3>Property List</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
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
