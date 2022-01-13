import React from 'react';

const User = (props) => {
    let {name, age, status} = props;
    return (
        <div>
            <h2>{JSON.stringify(status)}</h2>
            <p>{name} is {age} year old.</p>
        </div>
    );
};

export default User;