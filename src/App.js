import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/user.service";
import User from "./components/User";

function App() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);


    //StateLifting
    let [chosenUser, setChosenUser] = useState(null);
    const choseUser = (id) => {
        //todo - особый вид коммента, отображаемый в TODO листе
        getUser(id).then(value => setChosenUser(value.data))
    };
    //-Для передачи данных от Дочерних компонентов Родительским.
    //Ф-цию созданную в Родительском компоненте передают в дочерний.
    //Ф-цию полученную в Дочернем компоненте вызывают или передают далее.
    //PropertyDrills - передача ф-ции от Родит. к Дочер. компоненту и т.д.
    //Такой метод получения/подъема информации зовется StateLifting.

    return (
        <div>

            <div>{chosenUser?.name}</div>
            {
                //Вариант-1. "?"
                //- Если объекта chosenUser нет (приравнивается к false),
                //то и следующего запроса на .name не будет.
             }

            {
                chosenUser && <div>{chosenUser.name}</div>
                //Вариант-2 "&&"
                // -Если объекта chosenUser нет (приравнивается к false),
                //то и следующий компонент (после &&) выведен не будет.
            }

            <hr/>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    choseUser={choseUser}/>)
                //choseUser={choseUser} - передача ф-ции, PropertyDrills.
            }
        </div>
    );
}

export default App;
//App.js, User.js, user.service.js