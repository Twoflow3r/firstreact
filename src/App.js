import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
const Hello = "hello world";
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
         <h2>{Hello}</h2>
       
        </header>
      </div>
    );
  }
}

export default App;
