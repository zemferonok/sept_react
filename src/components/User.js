import React from 'react';

const User = (props) => {   //props - получение переданных данных
    let {name, age, status} = props;    //Деструктуризация данных
    return (
        <div>
            <h2>{JSON.stringify(status)}</h2>   //Костыль для Boolean
            <p>{name} is {age} year old.</p>
        </div>
    );
};

export default User;
//rsc > TAB создание компонента