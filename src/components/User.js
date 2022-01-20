import React from 'react';

const User = ({info:{id, name}}) => {
    return (
        <>
            {id} - {name}
        </>
    );
};

export default User;