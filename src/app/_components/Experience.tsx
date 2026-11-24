import { Fragment } from "react";
import { experience } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function Experience() {
  return (
    <section className={`${styles.section} ${styles.experience}`} id="experience">
      <div className={styles.sectionHead}>
        <span>02 / EXPERIENCE</span>
        <span>LEARNING BY DOING</span>
      </div>
      <div className={styles.expRow}>
        <div className={styles.expDate}>
          {experience.date}
          <br />
          <span>{experience.location}</span>
        </div>
        <div className={styles.expMain}>
          <h3>
            {experience.role} <span>↗</span>
          </h3>
          <p className={styles.company}>{experience.company}</p>
          <p className={styles.bodyText}>{experience.summary}</p>
          <ul>
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className={styles.expType}>
          {experience.type.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
