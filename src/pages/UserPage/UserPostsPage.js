import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {service} from "../../services/api.service";

const UserPostsPage = () => {

    let {id} = useParams()
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        service.getUserPosts(id).then(value => setPosts(value))
    },[])

    return (
        <div>
            <h2>User Posts Page</h2>
            {
                posts.map(post => <p key={post.id}>{post.id} ) {post.title}</p>)
                // console.log(posts)
            }
        </div>
    );
};

export {UserPostsPage};