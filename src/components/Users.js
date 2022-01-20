import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, [])

    return (
        <div>
            <ul>
                {
                    users.map(user => <li><User key={user.id} info={user}/></li>)
                }
            </ul>
        </div>
    );
};

export default Users;