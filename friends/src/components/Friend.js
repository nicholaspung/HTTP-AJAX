import React from 'react';
import AddFriend from './AddFriend';
import axios from 'axios';

class Friend extends React.Component {
    state = {
        toggleButton: false,
        name: this.props.friend.name,
        age: this.props.friend.age,
        email: this.props.friend.email,
        updatedName: this.props.friend.name,
        updatedAge: this.props.friend.age,
        updatedEmail: this.props.friend.email
    }

    changeToggle = () => {
        this.setState(prevState => ({ toggleButton: !prevState.toggleButton }))
    }

    updateFriend = (id, e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/friends/${id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
            .then(res => this.setState({ 
                toggleButton: false,
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
                updatedName: this.state.name,
                updatedAge: this.state.age,
                updatedEmail: this.state.email
            }))
            .catch(err => console.log('Error', err))
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                {this.state.toggleButton ? <AddFriend state={this.state} onInputChange={this.onInputChange} changeToggle={this.changeToggle} onSubmitForm={e => this.updateFriend(this.props.friend.id, e)}/> : 
                    <div>
                        <p>
                            {this.state.updatedName}, {this.state.updatedAge}
                            <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>delete friend</button>
                        </p>
                        <p>{this.state.updatedEmail}</p>
                        <button onClick={this.changeToggle}>update friend</button>
                    </div>}
            </div>
        );
    }
}

export default Friend;