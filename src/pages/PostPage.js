import React from 'react';
import {useLocation} from "react-router-dom";

const PostPage = () => {

    let {state} = useLocation(); //Catch data from "Link state={}"
    let {id, title, body} = state;

    return (
        <div>
            <h2>Single Post Page</h2>
            <h3>{id} ) {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostPage;