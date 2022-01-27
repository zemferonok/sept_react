import React from 'react';
import {Link} from "react-router-dom";

const Post = ({item}) => {
    const {id, title} = item;
    return (
        <div>
            {id} ) {title}
            <Link to={id.toString()} state={item}>Post Details</Link>
            {/*Use "state" to send some info with new URL*/}
            <hr/>
        </div>
    );
};

export default Post;