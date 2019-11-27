import React from "react";
import {useCallback} from "react";
import {useState} from "react";
import "./App.css";
import Form from "./components/form";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import {getWeather} from "./services/api";

const App = () => {

    const [weathers,setWeathers] = useState([]);
    const [error,setError] = useState(false);

    const loadWeather = useCallback(async (e)=>{
        e.preventDefault();
        const city = e.target.elements.city.value;
        if( !city ){
            setError(true)
        }else{
            setError(false);
            const result = await getWeather(city);
            setWeathers(result.list);
        }

    },[]);

    return (
        <div className="App">
            <Form loadWeather={loadWeather} error={error}/>
            <div className="container text-light">
                {weathers.map(({dt,temp,humidity,weather})=>(
                    <Weather
                        key={dt}
                        humidity={humidity}
                        day={temp.day}
                        min={temp.min}
                        max={temp.max}
                        night={temp.night}
                        description={weather[0].description}
                    />
                ))

                }

            </div>

        </div>
    )
};

export default App;

