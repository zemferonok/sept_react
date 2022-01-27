import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {getPosts} from "../services/api.service";
import Post from "../components/Post";

const PostsPage = () => {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            let temp = value.filter((value, index) => index<10)
            {/*Get just 10 posts of all*/}
            setPosts(temp);
        })
    }, [])

    return (
        <div>
            <h2>Posts Page</h2>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
            <hr/>
            <Outlet/>   {/*For render PostsPage's child element*/}
        </div>
    );
};

export default PostsPage;