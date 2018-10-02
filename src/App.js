import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
        <script type="text/javascript" src="https://js.taplytics.com/jssdk/54e9bd0339984587bf715fdc9c934e66.min.js"></script>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
