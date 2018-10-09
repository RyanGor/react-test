import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-button-component';


class App extends Component {

  constructor(props) {
    this.state = {
      buttonVar: false
    }
  }

  componentDidMount() {
    console.log("0", "MOUNTED")
    Taplytics.variable("buttonVar", true, (buttonVar) => {
      console.log("1", this.state.buttonVar, buttonVar)
      if (buttonVar === true) {
        this.setState({
          buttonVar: true
        })
      }
    });

  }
  render()
  let renderedButton
  console.log("2", this.state.buttonVar)
  if (this.state.buttonVar === true) {
    renderedButton = (
      <Button onClick={() => alert('Welcome!')}>
      Hop in!
    </Button>
  )
  } else {
    renderedButton = (
      <Button onClick={() => alert('Not Welcome!')}>
        Hop in!
      </Button>
    )
  }
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Integration <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button onClick={() => alert('Welcome!')}>
          Hop in!
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
