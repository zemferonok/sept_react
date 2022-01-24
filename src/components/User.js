import React, {useEffect, useState} from 'react';
import {userService} from "../services/user.service";

const User = () => {

    const [user, setUser] = useState({});
    useEffect(() => {
        userService.getUserById(1)
            .then(value => setUser(value));
    } ,[])

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default User;