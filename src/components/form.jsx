import React from "react";
import { useMemo } from "react";
import "./form.style.css";

const Form = props => {


  const error = (message) => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        {message}
      </div>
    );
  };


  return (
    <div className="container h-100">
      <form onSubmit={props.loadWeather}>
        <div>{props.error.error ? error(props.error.message) : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};



export default Form;
