import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {getUser} from "../services/api.service";

const UserPage = () => {
    console.log(JSON.stringify(useParams()));
    let {id} = useParams(); //Get FUCK ":elem" from route URL

    let [user, setUser] = useState([])
    useEffect(()=> {
        getUser(id).then(value => setUser(value));
    }, [id])

    return (
        <div>
            <h2>Single User Page - {id}</h2>
            <p>{JSON.stringify(user)}</p>
        </div>
    );
};

export default UserPage;