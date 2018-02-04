// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import add from './add';
import './App.css';

type Props = {};
type State = {
  value: number,
};

class App extends Component<void, Props, State> {
  state: State
  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{add(1, '3')}</p>
      </div>
    );
  }
}

export default App;
