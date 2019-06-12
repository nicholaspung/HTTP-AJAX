import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import axios from 'axios';

class App extends React.Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
    id: '',
    mapId: ''
  }

  componentDidMount() {
    // passes in something to initiate mapId to friends length synchronously
    this.grabFriendData(1)
  }

  grabFriendData = (id = 0) => {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .then(e => {
        // code is only used to initiate mapId to friends length synchronously, no other use case was thought of for this code
        if (id) {this.setState({ mapId: this.state.friends.length+1})}
      })
      .catch(err => console.log('Error', err))
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

  addNewFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email,
      id: this.state.mapId
    })
      .then(res => {
        this.setState(prevState => ({ mapId: prevState.mapId+1 }))
        return this.grabFriendData()
      })
      .catch(err => console.log('Error', err))
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        return this.grabFriendData()
      })
      .catch(err => console.log(err.message))
  }

  render () {
    return (
      <div className="App">
        Hello
        <AddFriend addNewFriend={this.addNewFriend} onInputChange={this.onInputChange} title='Add a Friend!'/>
        <FriendList friends={this.state.friends} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend}/>
      </div>
    );
  }
}

export default App;
