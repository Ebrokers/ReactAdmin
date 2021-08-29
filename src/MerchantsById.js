import React, { Component } from 'react';
import './App.css';
import { Container, Table } from 'reactstrap';

export class MerchantsById extends Component {

  state = {
    merchants: []
  };

  async componentDidMount() {
    const response = await fetch('/getMerchant/1');
    const body = await response.json();
    this.setState({merchants: body});
  }

  render() {
    const {merchants, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const merchantList = (properties => {
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
      <Container fluid>
        <h3>Merchants List By Id</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
          </thead>
          <tbody>
          {merchantList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
  }
}
