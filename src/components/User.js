import React from 'react';

const User = (props) => {
    let {name, username, id} = props;    //Деструктурирующее присваивание
    //props - собранный объект из всех полученных данных
    return (
        <div>
            {id} - {name} - {username}
        </div>
    );
};

export default User;