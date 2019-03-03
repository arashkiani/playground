import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import countFeedbackByRating from "../../helper/countFeedbackByRating";
import styles from "./styles.module.scss";
export default ({ FEEDBACKS, setFeedback }) => {
  const nextBtn = () => {
    setFeedback({ ...FEEDBACKS, submitted: false });
  };
  const options = {
    title: false,
    series: [
      {
        type: "pie",
        data: countFeedbackByRating(FEEDBACKS.data)
      }
    ]
  };
  return (
    <div className={styles.feedbackResult}>
      <h1>What we got so far!</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <table width="100%">
        <tbody>
          {FEEDBACKS.data.map(({ name, email, rate, comment }) => (
            <tr key={email}>
              <td>
                {name}
                {comment && (
                  <span className={styles["feedbackResult__comment"]}>
                    {" "}
                    💬
                    <div className={styles["feedbackResult__comment--hide"]}>
                      {comment}
                    </div>
                  </span>
                )}
              </td>
              <td>{email}</td>
              <td>{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.feedbackResult__next_btn} onClick={nextBtn}>
        Next
      </button>
    </div>
  );
};
