import React from 'react';

const AddFriend = props => {
    let exitUpdate = '';
    if (props.state.toggleButton) {
        exitUpdate = <button onClick={props.changeToggle}>exit update</button>
    }

    return (
        <form onSubmit={props.onSubmitForm}>
            <div>
                <h4>{props.title}</h4>
                <input placeholder="name" type='text' onChange={props.onInputChange} name='name' required value={props.state.name}/>
                <input placeholder="age" type='number' onChange={props.onInputChange} name='age' required value={props.state.age}/>
                <input placeholder="email" type='email' onChange={props.onInputChange} name='email' required value={props.state.email}/>
                <button>add</button>
            </div>
            {exitUpdate}
        </form>
    );
}

export default AddFriend;