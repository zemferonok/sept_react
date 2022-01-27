import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <a href="/">Reload</a>
        </div>
    );
};

export default Header;