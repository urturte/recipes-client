import React from "react";
import styles from "./textArea.module.css";

type TextAreaType = {
  placeholder: string;
  value: any;
  onChange: any;
};

const TextArea: React.FC<TextAreaType> = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      rows={5}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={styles.main}
    />
  );
};
export default TextArea;
