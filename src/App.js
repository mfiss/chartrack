import React, { Component } from 'react';
import './App.css';
import SavageSheet from './container/SavageSheet';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Character Tracker</h1>
        </header>
        <SavageSheet />
      </div>
    );
  }
}

