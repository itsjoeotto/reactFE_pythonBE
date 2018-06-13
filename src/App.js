import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    response: ''
  }

  componentDidMount() {
    axios.get('/foo').then(res => {
      console.log('response', res)
    })
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
