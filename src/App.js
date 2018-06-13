import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    response: []
  }

  componentDidMount() {
    axios.get('/foo').then(res => {
      console.log('response', res.data)
      this.setState({response: res.data})
    })
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.response.map(res => <li>{res}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
