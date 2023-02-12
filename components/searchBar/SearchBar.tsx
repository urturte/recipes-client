import React from "react";
import styles from "./searchBar.module.css";
import Button from "../button/Button";
import { useState } from "react";

// type SearchBarType = {
//   placeholder: string;
//   onChange: any;
// };

const SearchBar: React.FC = () => {
  const [filter, setFilter] = useState<any>("");
  const onChangeFilterInputHander = (eventValue: any) => {
    setFilter(eventValue);
  };

  return (
    <div className={styles.main}>
      <input
        placeholder="Search"
        className={styles.main}
        type="search"
        value={filter}
        onChange={(event) => onChangeFilterInputHander(event.target.value)}
      />
    </div>
  );
};
export default SearchBar;
