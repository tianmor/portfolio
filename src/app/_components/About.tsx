import { aboutPills } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.sectionHead}>
        <span>01 / ABOUT</span>
        <span>THE PERSON BEHIND THE BUILDS</span>
      </div>
      <div className={styles.aboutGrid}>
        <h2>
          Hardware mindset.
          <br />
          <span>Software curiosity.</span>
        </h2>
        <div>
          <p className={styles.bodyLead}>
            I’m a Computer Engineering graduate drawn to the space where physical systems and software meet.
          </p>
          <p className={styles.bodyText}>
            During my capstone, I explored computer vision and practical applications. In my current role at TDK, I
            support production equipment and help maintain reliable operations. Both experiences strengthened my
            interest in understanding how systems work and building practical solutions. I’m continuing to grow toward
            software engineering, automation, and AI.
          </p>
          <div className={styles.pills}>
            {aboutPills.map((pill) => (
              <span key={pill}>
                {pill} <b>↗</b>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
