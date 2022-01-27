import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {service} from "../../services/api.service";
import Post from "../../components/Post";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        service.getPosts().then(value => setPosts(value))
    },[])

    return (
        <div className={'postsPage'}>
            <div>
                <h2>Posts Page</h2>
                {
                    posts.map(post => <Post key={post.id} item={post}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};