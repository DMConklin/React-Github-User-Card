import React from 'react';
import './App.css';
import { UserCard, FollowerCard } from './components';

class App extends React.Component {

  constructor() {
    super();
    this.state= {
      user: {},
      followers: []
    }
  }

  dataHandler = (data, prop) => {
    console.log(`${prop}:`, data);
    this.setState({...this.state, [prop]: data})
  }

  Api = (url, prop, dataHandler) => {
    fetch(url, {
      headers: {
        'Authorization': 'token ce083e3f2646a24506e20ce66e96e17f726fd74a',
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then(res => res.json())
    .then(data => dataHandler(data, prop))
    .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.Api('https://api.github.com/users/DMConklin', 'user', this.dataHandler);
    this.Api('https://api.github.com/users/DMConklin/followers', 'followers', this.dataHandler);
  }

  render() {
    return (
        <div className="App">
          <UserCard user={this.state.user} />
          {this.state.followers.map(follower => <FollowerCard follower={follower} key={follower.node_id} />)}
        </div>
    );
  }
}

export default App;
