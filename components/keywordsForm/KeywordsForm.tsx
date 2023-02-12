import React, { useState } from "react";
import styles from "./keywordsForm.module.css";
import Button from "@/components/button/Button";
import axios from "axios";
import { useRouter } from "next/router";

const KeyfordsForm: React.FC = () => {
  const [keyword, setKeyword] = useState<any>();

  const router = useRouter();
  const onChange = (keywordValue: any) => {
    setKeyword(keywordValue);
  };

  const onClickHandler = () => {
    console.log("keyword", keyword);
    console.log("id", router.query._id);

    const response = axios.put(
      `http://localhost:8080/recipe/${router.query._id}`,
      { keywords: keyword }
    );
    console.log("response", response);
  };

  return (
    <div className={styles.main}>
      <input
        placeholder="Add keyword..."
        value={keyword}
        onChange={(keyword) => onChange(keyword.target.value)}
      />
      <div className={styles.buttonWrapper}>
        <Button text="Add keyword" onClick={() => onClickHandler()} />
      </div>
    </div>
  );
};
export default KeyfordsForm;
