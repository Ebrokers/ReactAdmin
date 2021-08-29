import React, { Component } from 'react';
import './App.css';
import { Container, Table } from 'reactstrap';

export class PropertiesById extends Component {

  state = {
    propertiesid: []
  };

  async componentDidMount() {
    const response = await fetch('/getProperty/1');
    const body = await response.json();
    this.setState({propertiesid: body});
  }

  render() {
    const {propertiesid, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const propertyListId = (propertiesid  => {
      const name = `${propertiesid.name} `;
      const location = `${propertiesid.location} `;
      const id = `${propertiesid.id} `;
      const meid = `${propertiesid.meid} `;
      return <tr key={propertiesid.id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{location}</td>
        <td>{meid}</td>
      </tr>
    });

  return (
    <div>
      <Container fluid>
        <h3>Property List By Id</h3>
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
          {propertyListId}
          </tbody>
        </Table>
      </Container>
    </div>
  );
  }
}
