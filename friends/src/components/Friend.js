import React from 'react';

const Friend = props => {
    return (
        <div>
            <p>
                {props.friend.name}, {props.friend.age}
                <button onClick={() => props.deleteFriend(props.friend.id)}>delete friend</button>
            </p>
            <p>{props.friend.email}</p>
        </div>
    );
}

export default Friend;