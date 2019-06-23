import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

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

      this.props.history.push('/friends')
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err.message))
  }

  render () {
    return (
      <div className="App">
        <NavLink exact activeStyle={{background: "red"}} to='/'>Home</NavLink>
        <NavLink activeStyle={{background: "red"}} to='/addfriend'>Add a friend</NavLink>
        <NavLink activeStyle={{background: "red"}} to='/friends'>Friend list</NavLink>

        <Route path="/addfriend" render={props => <AddFriend onSubmitForm={this.addNewFriend} onInputChange={this.onInputChange} title="Add a New Friend!" {...props} state={this.state}/>}/>
        <Route path="/friends" render={props => <FriendList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend}/>}/>
      </div>
    );
  }
}

export default App;
