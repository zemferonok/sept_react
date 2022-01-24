import {useEffect, useState} from "react";
import './App.css';
import {userService} from "./services/user.service";
import User from "./components/User";


function App() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, [])

    const changeId = (e) => {
        const id = e.target.value;
        setUserId(id);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userId)

        userService.getById(userId)
            .then(value => setUser(value));
    }

    return (
        <div className={(userId==5)?'style1':'style2'}>
            {/*Вариативное изменение стилей, arrow if-else*/}
            <form onSubmit={onSubmit}>
                <select name={'userId'} value={userId} onChange={changeId}>
                    {/* value определяет показываемый пункт в селекторе*/}
                    {
                        users.map(item => <option key={item.id} value={item.id}>
                            {item.id}) {item.name}
                        </option>)
                    }
                </select>

                <button>send</button>
            </form>

            {user && <User info={user}/>}
            {/*Если user = true, тогда вывести <User/>*/}
        </div>
    );
}

export default App;