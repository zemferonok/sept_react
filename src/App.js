import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./services/userService";
import User from "./component/User";

function App() {

    let click2 = () => {
        console.log('click 2 test');
    };


    let [counter, setCounter] = useState(0);
    let increment = () => {
        setCounter(++counter);
    };
    //useState при обновлении/перезаписи данных отрисовывает страницу заново.


    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value]));
    }, []);
    //[...name] - спред оператор. Создать клон из имеющегося, поместить в [].


    return (
        <div>
            <button onClick={()=>console.log('click 1')}>ClickMe1</button>
            <button onClick={click2}>ClickMe2</button>


            <h1>{counter}</h1>
            <button onClick={increment}>incrementMe</button>


            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );
}

export default App;
//App.js userService.js User.js