import React from 'react';

const Post = ({info:{id, title}}) => {
    return (
        <>
            {id} - {title}
        </>
    );
};

export default Post;