import './App.css';
import Child from "./components/Child";

function App() {

    let user = {name: 'Vasya', age: 16};
    let text = 'BigPinkToy';

    return (
        <div>
            {/*..передачи данных между тегами компоненты*/}
            <Child>
                SomeText{/*First sending data*/}
                {user}{/*Second sending data*/}
                {text}{/*Third sending data*/}
            </Child>
        </div>
    );
}

export default App;
