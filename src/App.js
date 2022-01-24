import {createRef, useState} from "react";
import './App.css';

function App() {

    // Для контроля одного поля Формы (test)
    const [test, setTest] = useState('default');

    // При изменении поля формы (test)
    const testTyping = (e) => {
        setTest(e.target.value)
    }


    // Для контроля нескольких полей Формы (name, age)
    const [form, setForm] = useState({name:'', age: 0});

    // Ф-ция вызываемая при изменение поля Формы (name, age).
    const formTyping = (e) => {
        let key = e.target.name;    //Получение имени поля
        let value = e.target.value; //Получение значения поля
        // Перезапись содержимого и до-запись елемента объекта
        setForm({...form, [key]: value});
        console.log(form);          //Готовый для отправки объект
    }
    // е - Объект события вызываемого из определенного поля/области.
    // Имеет доступ к любым значениям полей Формы, в данной ситуации.


    // Еще один способ следить за полем Формы (field1, field2)
    let field1 = createRef();   // Следить за полем (field1)
    let field2 = createRef();   // Следить за полем (field2)


    //Ф-ция выполняемая при отправки Формы
    const onSubmit = (e) => {
        e.preventDefault();     //Отключить перезагрузку
        console.log(e.target);  //Вывести всю Форму
        ////////////////////////////////////////
        console.log(form);      //Готовый к отправке объект
        ////////////////////////////////////////
        // Значение полей (field1, field2)
        console.log(field1.current.value);
        console.log(field2.current.value);
    }

    return (
        <div>
            {/*Контролируемая форма*/}
            <form onSubmit={onSubmit}>
                <label>Test: <input type="text" name={'test'} value={test} onChange={testTyping}/></label>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formTyping}/></label>
                <label>Age: <input type="number" name={'age'} value={form.age} onChange={formTyping}/></label>

                <label>Field1: <input type="text" name={'field1'} ref={field1}/></label>
                <label>Field2: <input type="text" name={'field2'} ref={field2}/></label>

                <button>send</button>
            </form>
        </div>
    );
}

export default App;