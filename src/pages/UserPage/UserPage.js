import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const UserPage = () => {

    let {state} = useLocation();
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (state) {
            setUser(state)
        }
    }, [state])

    let navigator = useNavigate();

    return (
        <div>
            <h2>User Single Page</h2>
            <p>{JSON.stringify(user)}</p>
            <button onClick={() => navigator('posts')}>Posts</button>
            <Outlet/>
        </div>
    );
};

export {UserPage};