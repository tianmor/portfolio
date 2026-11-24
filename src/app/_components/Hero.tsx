import { site } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>
          <i /> AVAILABLE FOR OPPORTUNITIES <span>— {site.location}</span>
        </p>
        <h1>
          Building with
          <br />
          curiosity<span className={styles.accent}>.</span>
          <br />
          <span className={styles.outline}>Solving with purpose.</span>
        </h1>
        <p className={styles.intro}>
          Hi, I’m Christian — a Computer Engineer who enjoys building things, solving problems, and turning ideas into
          practical solutions.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#projects">
            Explore my work <span>↓</span>
          </a>
          <a className={styles.secondary} href="#contact">
            Get in touch <span>↗</span>
          </a>
        </div>
        <div className={styles.social}>
          <a href={site.github} target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN ↗
          </a>
          <span>{site.role}</span>
        </div>
      </div>
      <div className={styles.art} role="img" aria-label="Abstract engineering-inspired orbital graphic">
        <div className={`${styles.orbit} ${styles.orbitOne}`} />
        <div className={`${styles.orbit} ${styles.orbitTwo}`} />
        <div className={`${styles.orbit} ${styles.orbitThree}`} />
        <div className={styles.core}>
          <span>{site.monogram}</span>
          <small>BUILD / TEST / LEARN</small>
        </div>
        <i className={styles.dotOne} />
        <i className={styles.dotTwo} />
        <i className={styles.dotThree} />
        <div className={styles.artLabel}>
          FIG. 001 <span>AN ENGINEER’S MIND</span>
        </div>
      </div>
      <div className={styles.scrollNote}>
        SCROLL TO EXPLORE <span>↓</span>
      </div>
    </section>
  );
}
