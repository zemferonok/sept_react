import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {service} from "../../services/api.service";
import User from "../../components/User";

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        service.getUsers().then(value => setUsers(value))
    },[])

    return (
        <div className={'usersPage'}>
            <div>
                <h2>Users Page</h2>
                {
                    users.map(value => <User key={value.id} item={value}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};