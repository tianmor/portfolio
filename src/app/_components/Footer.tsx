import { site } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.logo} href="#home">
        <span>{site.monogram}</span> {site.name.toUpperCase()}
      </a>
      <p>DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</p>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  );
}
