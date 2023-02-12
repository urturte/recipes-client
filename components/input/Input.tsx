import React from "react";
import styles from "./input.module.css";

type InputType = {
  placeholder: string;
  value: any;
  onChange: any;
  type: string;
};

const Input: React.FC<InputType> = ({ placeholder, value, onChange, type }) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={styles.main}
      type={type}
    />
  );
};
export default Input;
