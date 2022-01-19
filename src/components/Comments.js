import React, {useEffect, useState} from 'react';

const Comments = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setComments(value));
    }, [])

    return (
        <div>
            <ul>
                {
                    comments.map(comment => {
                        if (comment.id < 11) {
                            return <li>{comment.id} - {comment.title}</li>
                        }
                    })
                }
            </ul>
        </div>
    );
};

export default Comments;