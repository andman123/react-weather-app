import React from "react";
import "./weather.style.css";

const Weather = ({city,day,min,max,night,description}) => {


    return (
        <div className="Card" style={{display:"inline-block"}}>

            <h3>
                <div className="px-4">Day : {day}&deg;</div>
                <div className="px-4">Max : {max}&deg;</div>
                <div className="px-4">Min : {min}&deg;</div>
                <div className="px-4">Night : {night}&deg;</div>
            </h3>
            <h4 className="py-3">
                {description.charAt(0).toUpperCase() +
                description.slice(1)}
            </h4>
        </div>
    );
};

export default Weather;
