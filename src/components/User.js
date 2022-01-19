import React from 'react';

const User = ({item, choseUser}) => {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={() => {
                choseUser(item.id);
                //choseUser(); - вызов функции,
                // прокидывание данных (item.id), StateLifting
            }}>details</button>
        </div>
    );
};

export default User;