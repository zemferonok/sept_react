import React from 'react';

const Child = (props) => {
    let children = props.children; //..получение данных

    return (
        <div>
            <h3>{JSON.stringify(props)}</h3>
            <h2>{children[0]} - {children[2]}</h2>
            {/*Если данных передано много, они сохраняются в массив*/}
        </div>
    );
};

export default Child;