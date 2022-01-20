import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                let filter = value.filter((data, index) => index < 10);
                setPosts(filter)
            });
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li><Post key={post.id} info={post}/></li>)
                }
            </ul>
        </div>
    );
};

export default Posts;