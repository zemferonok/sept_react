import React from 'react';

const Comment = ({info:{id, title}}) => {
    return (
        <>
            {id} - {title}
        </>
    );
};

export default Comment;