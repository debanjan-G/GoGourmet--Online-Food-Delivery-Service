import styles from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label>{props.input.label}</label>
      <input {...props.input} ref={ref} defaultValue="1" />
    </div>
  );
});

export default Input;
