import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {getUsers} from "../services/api.service";
import User from "../components/User";

const UsersPage = () => {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, [])

    return (
        <div>
            <h2>UsersPage</h2>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <hr/>
            <Outlet/>       {/*For render UsersPage's child element*/}
        </div>
    );
};

export default UsersPage;