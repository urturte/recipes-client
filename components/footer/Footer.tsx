import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={styles.main}>
      <h2>© Urtė Nistirenko. Code Academy. 2023</h2>
    </div>
  );
};
export default Footer;
