import { Fragment } from "react";
import { education } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.sectionHead}>
        <span>05 / EDUCATION</span>
        <span>FOUNDATIONS</span>
      </div>
      <div className={styles.education}>
        <span className={styles.eduMark}>{education.mark}</span>
        <div>
          <p>{education.school}</p>
          <h2>
            {education.degree.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h2>
        </div>
        <span className={styles.eduDate}>{education.field}</span>
      </div>
    </section>
  );
}
