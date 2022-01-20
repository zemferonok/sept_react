import {useEffect, useState} from "react";
import './App.css';
import {getLaunches} from "./services/spacex.service";
import Flight from "./components/Flight";

function App() {

    const [flights, setFlights] = useState([]);
    useEffect(() => {
        getLaunches().then(value => {
            let filter = value.data.filter(flight => flight.launch_year !== '2020');
            setFlights(filter);
        });
    }, []);

    return (
        <div className='App'>
            {
                flights.map(data => <Flight key={data.flight_number} info={data}/>)
            }
        </div>
    );
}

export default App;