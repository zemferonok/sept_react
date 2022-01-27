import React from 'react';
import {Link} from "react-router-dom";

const User = ({item}) => {
    let {id, name} = item;

    return (
        <div>
            {id} ) {name} -->
            <Link to={id.toString()} state={item}>UserDetails</Link>
        </div>
    );
};

export default User;