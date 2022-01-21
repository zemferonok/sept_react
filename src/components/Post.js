import React from 'react';

const Post = ({item}) => {
    const {userId, id, title, body} = item;
    return (
        <div>
            <p>id: {id} - userid:{userId}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
            <hr/>
        </div>
    );
};

export default Post;