import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const User = ({item}) => {
    let {id, name} = item;

    let navigator = useNavigate();  //For changing URL without Link
    let goTo = (url) => {   //Go to this URL
        navigator(url.toString());
    }
    let back = () => {      //Go 2 step back in history
        navigator(-2);
    }
    let forward = () => {   //Go 1 step forward in history
        navigator(1);
    }

    return (
        <div>
            <span>{id} ) {name}</span>
            {/*<Link to={id.toString()}>Details</Link>*/}

            <button onClick={() => goTo(id)}>   {/*Change URL*/}
                Details
            </button>
        </div>
    );
};

export default User;