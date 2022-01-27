import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const PostPage = () => {
    let {state} = useLocation();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        if (state) {
            setPost(state)
        }
    },[state])

    const navigator = useNavigate();

    return (
        <div>
            <h2>Post Single Page</h2>
            <p>{JSON.stringify(post)}</p>
            <button onClick={()=>navigator('comments')}>Comments</button>
            <Outlet/>
        </div>
    );
};

export {PostPage};