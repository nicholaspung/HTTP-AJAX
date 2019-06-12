import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: ''
  }

  componentDidMount() {
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
      email: this.state.email
    })
      .then(res => this.setState({ 
        friends: res.data,
        name: '',
        age: '',
        email: ''
      }))
      .catch(err => console.log('Error', err))
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err.message))
  }

  render () {
    return (
      <div className="App">
        Hello
        <AddFriend onSubmitForm={this.addNewFriend} onInputChange={this.onInputChange} title="Add a New Friend!" state={this.state} />
        <FriendList friends={this.state.friends} deleteFriend={this.deleteFriend}/>
        {/* <Link to='/addfriend'>Add a friend</Link>
        <Link to='friends'>Friend list</Link>

        <Route path="/addfriend" render={prop => <AddFriend onSubmitForm={prop.addNewFriend} onInputChange={prop.onInputChange} title="Add a New Friend!" state={prop.state}/>}/>
        <Route path="/friends" render={prop => <FriendList friends={prop.state.friends} deleteFriend={prop.deleteFriend}/>}/> */}
      </div>
    );
  }
}

export default App;
