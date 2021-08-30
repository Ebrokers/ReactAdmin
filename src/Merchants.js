import React, { Component } from 'react';
import './App.css';
import { Button,ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
export class Merchants extends Component {

  state = {
    merchants: []
  };

  async componentDidMount() {
    const response = await fetch('/getAllMerchant');
    const body = await response.json();
    this.setState({merchants: body});
  }

  async remove(id) {
    await fetch(`/delMerchant/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedGroups = [...this.state.merchants].filter(i => i.id !== id);
      this.setState({merchants: updatedGroups});
    });
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
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary">Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(merchants.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

  return (
    
    <div>
      <div className="float-right">
            <Button color="success">Add Merchant</Button>
      </div>
      <Container fluid>
        <h3>Merchants List</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
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
