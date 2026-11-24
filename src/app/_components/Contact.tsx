import { contactLinks } from "../../data/portfolio";
import styles from "../portfolio.module.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.sectionHead}>
        <span>06 / CONTACT</span>
        <span>GOOD THINGS START WITH A CONVERSATION</span>
      </div>
      <div className={styles.contactGrid}>
        <div>
          <h2>
            Have a project
            <br />
            or opportunity?
            <br />
            <span>Let’s connect.</span>
          </h2>
          <p>I’m open to conversations about software, engineering, and opportunities to build useful things.</p>
          <div className={styles.contactLinks}>
            {contactLinks.map(({ label, href }) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
