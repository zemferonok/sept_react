import React from 'react';

const User = ({info, getUserDetails}) => {
    const {id, name} = info;
    return (
        <div>
            {id} - {name}
            <button onClick={() => getUserDetails(info)}> details </button>
        </div>
    );
};

export default User;