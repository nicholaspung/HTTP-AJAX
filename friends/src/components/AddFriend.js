import React from 'react';

const AddFriend = props => {
    return (
        <form onSubmit={props.addNewFriend}>
            <h4>{props.title}</h4>
            <input placeholder="name" type='text' onChange={props.onInputChange} name='name' required/>
            <input placeholder="age" type='number' onChange={props.onInputChange} name='age' required/>
            <input placeholder="email" type='email' onChange={props.onInputChange} name='email' required/>
            <button>add</button>
        </form>
    );
}

export default AddFriend;