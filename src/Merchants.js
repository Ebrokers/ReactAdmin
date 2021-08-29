import React, { Component } from 'react';
import './App.css';
import { Button, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
export class Merchants extends Component {

  state = {
    merchants: []
  };

  async componentDidMount() {
    const response = await fetch('/getAllMerchant');
    const body = await response.json();
    this.setState({merchants: body});
  }

  render() {
    const {merchants, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const merchantsList = merchants.map(merchants => {
      const name = `${merchants.name} `;
      const email = `${merchants.email} `;
      const id = `${merchants.id} `;
      return <tr key={merchants.id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    });

  return (
    
    <div>
      <div className="float-right">
            <Button color="success"  tag={Link} to="/addMer">Add Merchant</Button>
      </div>
      <Container fluid>
        <h3>Merchants List</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {merchantsList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
  }
}
