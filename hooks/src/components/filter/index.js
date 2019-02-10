import React from "react";
import styles from "./styles.module.scss";

const filter = ({ searchText, updateSearch }) => {
  return (
    <div className={styles.filters}>
      <input
        className={styles.filters__input}
        type="text"
        value={searchText}
        onChange={({ target: { value } }) => updateSearch(value)}
      />
      <button className={styles.filters__btn}>search</button>
    </div>
  );
};

export default filter;
