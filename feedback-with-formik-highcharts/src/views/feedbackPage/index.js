import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import FeedbackForm from "../feedbackForm";
import FeedbackResult from "../feedbackResult";
export default () => {
  const defaultFeedbacks = JSON.parse(sessionStorage.getItem("FEEDBACKS"));
  const [FEEDBACKS, setFeedback] = useState(
    defaultFeedbacks || { submitted: false, data: [] }
  );

  useEffect(() => {
    sessionStorage.setItem("FEEDBACKS", JSON.stringify(FEEDBACKS));
  }, [FEEDBACKS]);

  return (
    <div className={styles.feedbackPage}>
      {FEEDBACKS.submitted ? (
        <FeedbackResult FEEDBACKS={FEEDBACKS} setFeedback={setFeedback} />
      ) : (
        <FeedbackForm FEEDBACKS={FEEDBACKS} setFeedback={setFeedback} />
      )}
    </div>
  );
};
