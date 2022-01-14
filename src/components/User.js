import React from 'react';

const User = (props) => {
    console.log(props)
    let {name, username, id} = props;    //Деструктурирующее присваивание
    return (
        <div>
            {id} - {name} - {username}
        </div>
    );
};

export default User;