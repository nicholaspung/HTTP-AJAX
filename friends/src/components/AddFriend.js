import React from 'react';

const AddFriend = () => {
    return (
        <form>
            <h4>Add a Friend!</h4>
            <input placeholder="name" type='text'/>
            <input placeholder="age" type='number'/>
            <input placeholder="email"type='email'/>
            <button>add</button>
        </form>
    );
}

export default AddFriend;