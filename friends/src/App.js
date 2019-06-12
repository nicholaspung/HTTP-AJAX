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
    id: ''
  }

  componentDidMount() {
    this.grabFriendData()
  }

  grabFriendData = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
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
      id: this.state.friends.length+1
    })
      .then(res => {
        console.log(res)
        return this.grabFriendData()
      })
      .catch(err => console.log('Error', err))
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res)
        return this.grabFriendData()
      })
      .catch(err => console.log(err))
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
