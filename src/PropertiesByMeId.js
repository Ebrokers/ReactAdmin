import React, { Component } from 'react';
import './App.css';
import { Container, Table } from 'reactstrap';

export class PropertiesByMeId extends Component {

  state = {
    properties: []
  };

  async componentDidMount() {
    const response = await fetch('/getPropertyByMeId/1');
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
        <td>{properties.meid}</td>
      </tr>
    });

  return (
    <div>
      <Container fluid>
        <h3>Property List By MeId</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Location</th>
            <th>MeId</th>
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
