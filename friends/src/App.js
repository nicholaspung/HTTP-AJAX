import React from 'react';
import './App.css';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      Hello
      <AddFriend />
      <FriendList />
    </div>
  );
}

export default App;
