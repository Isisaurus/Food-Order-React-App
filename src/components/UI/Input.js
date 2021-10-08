import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["input-container"]}>
      <label htmlFor={props.input.id} className={classes.label}>
        {props.label}
      </label>
      <input
        type={props.input.type}
        {...props.input}
        className={classes.input}
      />
    </div>
  );
};

export default Input;
