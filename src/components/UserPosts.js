import React, {useEffect, useState} from 'react';
import {getUserPosts} from "../services/service";
import Post from "./Post";

const UserPosts = ({userIdForPosts}) => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getUserPosts(userIdForPosts).then(value => setPosts(value));
    },[posts])

    return (
        <div className='box userPosts'>
            <h2>User Posts</h2>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
};

export default UserPosts;