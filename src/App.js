import './App.css';
import User from "./components/User";

let users = [
    {id: 1, name: 'Sas', age: 18, status: true},
    {id: 2, name: 'Ksu', age: 22, status: false},
    {id: 3, name: 'Din', age: 26, status: true},
    {id: 4, name: 'Nst', age: 30, status: false},
];

function App() {
    return (
        <div className="App">
            <p>Для сокращения ссылок - http://tny.im</p>

            {
                users.map( item => <User key={item.id} name={item.name} age={item.age} status={item.status}/>)
            }
        </div>
    );
}

export default App;