import styles from "./portfolio.module.css";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Ticker from "./_components/Ticker";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import Education from "./_components/Education";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Portfolio() {
  return (
    <main className={styles.page}>
      <Header />
      <Hero />
      <Ticker />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
