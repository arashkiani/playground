import React from "react";
import { Formik } from "formik";
import validationSchema from "./validationSchema";
import { findIndexInArrayOfObjects, saveObjectIntoArray } from "../../helper";
import { Input, Rate } from "../../components";
import styles from "./styles.module.scss";
export default ({ FEEDBACKS, setFeedback }) => {
  const onSubmitFeedback = (value, actions) => {
    const indexIfExist = findIndexInArrayOfObjects(
      FEEDBACKS.data,
      "email",
      value.email
    );
    const feedbacks = {
      submitted: true,
      data: saveObjectIntoArray(FEEDBACKS.data, indexIfExist, value)
    };
    setFeedback(feedbacks);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", rate: 0, comment: "" }}
      onSubmit={onSubmitFeedback}
      validationSchema={validationSchema}
      render={({ handleSubmit, errors, touched }) => {
        const commonProps = { errors, touched };
        return (
          <div className={styles.form}>
            <h1>Give us your Feedback</h1>
            <form onSubmit={handleSubmit}>
              <Input {...commonProps} name="name" placeholder="Name" />
              <Input
                {...commonProps}
                name="email"
                type="email"
                placeholder="Email"
              />
              <Rate {...commonProps} name="rate" num={5} />
              <Input
                {...commonProps}
                name="comment"
                component="textarea"
                placeholder="Comment"
              />
              <button className={styles.form__submit} type="submit">
                Submit
              </button>
            </form>
          </div>
        );
      }}
    />
  );
};
