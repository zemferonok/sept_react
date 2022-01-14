import './App.css';
import User from "./components/User";
import {useEffect, useState} from "react";

function App() {

    let [usersList, setUsersList] = useState([]);
    //userList хранит данные, а ф-ция setUserList задаёт их
    //Ожидаемые данные initialState могут быть любыми, {}, [], number, ...

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                setUsersList(users);
            });
    }, []);
    //Хук useEffect позволяет использовать fetch в React
    //Хуки useEffect и useState используются вместе, для получения и сохранения данных.

    return (
        <div className="App">
            {
                usersList.map(value => <User key={value.id}
                                             id={value.id}
                                             name={value.name}
                                             username={value.username}/>)
            }
        </div>
    );
}

export default App;
