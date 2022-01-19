import React, {useEffect, useState} from 'react';

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
                    users.map(user => <li>{user.id} - {user.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Users;