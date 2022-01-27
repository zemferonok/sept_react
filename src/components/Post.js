import React from 'react';
import {Link} from "react-router-dom";

const Post = ({item}) => {
    const {id, title} = item;

    return (
        <div>
            {id} ) {title} -->
            <Link to={id.toString()} state={item}>PostDetails</Link>
        </div>
    );
};

export default Post;