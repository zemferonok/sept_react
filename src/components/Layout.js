import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={'header'}>
                <Link to="/">Home</Link>    {/*No reload page*/}
                <Link to="/users">Users</Link> {/*Make URL "/users"*/}
                <Link to="/posts">Posts</Link>
                <a href="/">Reload</a>      {/*Reload page*/}
            </div>

            <Outlet/>       {/*For render Layout's child element*/}

            <div className={'footer'}>
                @EndOfTimes
            </div>
        </div>
    );
};

export default Layout;