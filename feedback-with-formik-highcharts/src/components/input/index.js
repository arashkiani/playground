import React from "react";
import { Field } from "formik";
import styles from "./styles.module.scss";

export default ({
  name,
  placeholder,
  component,
  type,
  errors = {},
  touched = {},
  children
}) => {
  return (
    <div className={styles.input}>
      <Field
        name={name}
        placeholder={placeholder}
        component={component}
        type={type}
        className={styles.input__field}
      >
        {children}
      </Field>
      {errors[name] && touched[name] && (
        <div className={styles.input__error}>{errors[name]}</div>
      )}
    </div>
  );
};
