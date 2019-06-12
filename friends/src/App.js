import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import axios from 'axios';

class App extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log('Error', err))
  }

  render () {
    console.log(this.state.friends)
    return (
      <div className="App">
        Hello
        <AddFriend />
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
