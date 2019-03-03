import React from "react";
import { Field } from "formik";
import styles from "./styles.module.scss";

export default props => (
  <div className={styles["star-cb-group"]}>
    {[...Array(props.num)].map((v, key) => {
      const rate = props.num - key;
      return (
        <React.Fragment key={rate}>
          <Field
            {...props}
            type="radio"
            id={props.name + "-" + rate}
            value={rate}
          />
          <label htmlFor={props.name + "-" + rate}>{rate}</label>
        </React.Fragment>
      );
    })}
    {props.errors[props.name] && props.touched[props.name] && (
      <div>{props.errors[props.name]}</div>
    )}
  </div>
);
