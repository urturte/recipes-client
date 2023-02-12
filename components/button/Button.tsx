import React from "react";
import styles from "./button.module.css";

type ButtonType = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonType> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.main}>
      {text}
    </button>
  );
};
export default Button;
