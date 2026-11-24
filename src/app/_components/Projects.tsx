import { projects } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.sectionHead}>
        <span>03 / SELECTED WORK</span>
        <span>PROJECTS & EXPERIMENTS</span>
      </div>
      <div className={styles.projectIntro}>
        <h2>
          Made to be <span>useful.</span>
        </h2>
        <p>
          A selection of academic and personal projects exploring accessible technology, practical software, and data.
        </p>
      </div>
      <div className={styles.projects}>
        {projects.map((project) => (
          <article className={styles.project} key={project.n}>
            <div className={`${styles.projectVisual} ${styles[project.tint]}`}>
              <div className={styles.visualGrid} />
              <span className={styles.visualIndex}>{project.n} / PROJECT</span>
              <span className={styles.visualIcon}>{project.visual}</span>
              <span className={styles.visualCaption}>{project.type}</span>
              <span className={styles.visualArrow}>↗</span>
            </div>
            <div className={styles.projectInfo}>
              <p className={styles.projectType}>{project.type}</p>
              <h3>{project.title}</h3>
              <p className={styles.projectText}>{project.text}</p>
              <div className={styles.stack}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <span>Repository link to be added</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
