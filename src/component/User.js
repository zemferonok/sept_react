import React from 'react';

const User = (props) => {

    let {item:{id, name , username}} = props;

    return (
        <div>
            <h1>{id} - {username}</h1>
            <p>{name}</p>
            <hr/>
        </div>
    );
};

export default User;