import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/service";
import User from "./User";

const Users = ({getUserDetails}) => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers(value));
    }, []);

    return (
        <div className='box users'>
            <h2>Users</h2>
            {
                users.map(user => <User
                    key={user.id}
                    info={user}
                    getUserDetails={getUserDetails}/>)
            }
        </div>
    );
};

export default Users;