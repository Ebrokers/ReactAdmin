import React, { Component } from 'react';
import './App.css';
import { Button, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
export class addMer extends Component {

render() {
        const {merchants, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }
    
  return (
    <div>
        <h3>Merchants List</h3>  
    </div>
  );
}
