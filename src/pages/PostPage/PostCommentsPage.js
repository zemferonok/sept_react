import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {service} from "../../services/api.service";
import Comment from "../../components/Comment";

const PostCommentsPage = () => {

    const {id} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        service.getPostComments(id).then(value => setComments(value))
    },[])

    return (
        <div>
            <h2>Post Comments Page</h2>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
};

export {PostCommentsPage};