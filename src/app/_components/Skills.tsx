import { skills } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.sectionHead}>
        <span>04 / TOOLKIT</span>
        <span>TOOLS I’M LEARNING & USING</span>
      </div>
      <div className={styles.skillsLayout}>
        <h2>
          Curiosity is
          <br />
          part of the <span>toolkit.</span>
        </h2>
        <div>
          {skills.map(([number, title, description]) => (
            <div className={styles.skillRow} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <b>↗</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
