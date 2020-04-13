import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state= {
      user: {}
    }
  }

  componentDidMount = () => {
    fetch(`https://api.github.com/users/DMConklin`, {
      headers: {
        'Authorization': 'token ce083e3f2646a24506e20ce66e96e17f726fd74a',
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then(res => console.log(res.json()))
    .catch(err => console.log(err))
  }
  

  render() {
    return (
        <div className="App">
          
        </div>
    );
  }
}

export default App;
