import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                let filter = value.filter((data, index) => index < 10);
                setComments(filter);
            });
    }, [])

    return (
        <div>
            <ul>
                {
                    comments.map(comment => <li><Comment key={comment.id} info={comment}/></li>)
                }
            </ul>
        </div>
    );
};

export default Comments;