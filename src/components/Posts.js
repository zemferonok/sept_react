import React, {useEffect, useState} from 'react';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value));
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => {
                        if (post.id < 11) {
                            return <li>{post.id} - {post.title}</li>
                        }
                    })
                }
            </ul>
        </div>
    );
};

export default Posts;