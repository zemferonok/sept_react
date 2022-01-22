import React from 'react';

const Child = (props) => {
    // let children = props.children; //..получение данных
    let {children} = props;         //..получение данных
    //Полученные данные будут находится по ключу children
    //Если данных передано много, они сохраняются в массив
    console.log(children)

    return (
        <div>
            <h2>{children[0]}</h2>
            <h2>{children[1].name}</h2>
            <h2>{children[2]}</h2>
        </div>
    );
};

export default Child;