import React from 'react';

const Comment = ({item:{id, name, email, body}}) => {
    return (
        <div>
            <p>{id} ) {email}</p>
            <p>{name}</p>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default Comment;