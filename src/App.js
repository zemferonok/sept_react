import './App.css';
import User from "./components/User";   //Импорт ... компонента.

let users = [
    {id: 1, name: 'Sas', age: 18, status: true},
    {id: 2, name: 'Ksu', age: 22, status: false},
    {id: 3, name: 'Din', age: 26, status: true},
    {id: 4, name: 'Nst', age: 30, status: false},
];

function App() {    //Названия функций-компонент с большой буквы
    return (        //Можно возвращать только один элемент, DIV.
        <div className="App"> //class >> calsName - суть одна, другое имя
            <p>Для сокращения ссылок - http://tny.im</p>

            {       //Открытие разверстки для JS кода
                users.map(item => <User key={item.id}           //Ключ нужен для уникальности объекта
                                        name={item.name}        //Передача данных в компоненту User
                                        age={item.age}
                                        status={item.status}/>)
            }
        </div>
    );
}

export default App;     //Предоставление доступа к компоненту.
//Файлы в src для просмотра App.js components/User.js