import {createRef, useState} from "react";

import './App.css';
import User from "./components/User";
import Child from "./components/Child";

function App() {

    let user = {name: 'Vasya', age: 16};

    // Для контроля одного поля Формы
    const [test, setTest] = useState('default');
    const testTyping = (e) => {
        setTest(e.target.value)
    }

    // Для контроля нексольких полей формы
    const [form, setFotrm] = useState({name:'', age: 0});
    const formTyping = (e) => {
        let key = e.target.name;    //Получение имени поля
        let value = e.target.value; //Получение значения поля
        setFotrm({...form, [key]: value});
        console.log(form);          //Готовый для отправки объект
    }

    let field1 = createRef();   //..способ следить за значением поля
    let field2 = createRef();

    const onSubmit = (e) => {
        e.preventDefault();     //Откл. перезагр. страницы по умолч.
        console.log(e.target);  //Вывести форму

        let sendObj = form;     //Готовый к отправке объект
        console.log(sendObj)

        console.log(field1.current.value);  //..значение поля
        console.log(field2.current.value);
    }

    return (
        <div>
            {/*..способ передачи данных */}
            <Child>
                SomeText
                {user}
                SexToy
            </Child>

            <User/>

            {/*Конролируемая форма*/}
            <form onSubmit={onSubmit}>
                <label>Test: <input type="text" name={'test'} value={test} onChange={testTyping}/></label>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formTyping}/></label>
                <label>Age: <input type="number" name={'age'} value={form.age} onChange={formTyping}/></label>
                <label>Field1: <input type="text" name={'field1'} ref={field1}/></label>
                <label>Field2: <input type="text" name={'field2'} ref={field2}/></label>
                <button>send</button>
            </form>

            <p>
                Stop Video by
                https://www.youtube.com/watch?v=GMGGMLkaj38&list=PLY1sAemBLA5y4bAQZGR6-eAyP2TD5l_Io&index=92
                at 1:16:31
                Взять себе пример написаный далее с Селектором
            </p>
        </div>
    );
}

export default App;
