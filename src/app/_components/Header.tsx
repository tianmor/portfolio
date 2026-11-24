"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "../../data/portfolio";
import styles from "../portfolio.module.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menu) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenu(false);
    }

    function onPointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menu]);

  return (
    <header ref={headerRef} className={styles.header}>
      <a className={styles.logo} href="#home">
        <span>{site.monogram}</span> {site.name.toUpperCase()}
        <span className={styles.logoDim}> / PORTFOLIO</span>
      </a>
      <button
        className={styles.menuButton}
        onClick={() => setMenu(!menu)}
        aria-expanded={menu}
        aria-controls="site-nav"
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav
        id="site-nav"
        className={`${styles.nav} ${menu ? styles.navOpen : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
            {label}
          </a>
        ))}
        <a className={styles.navContact} href="#contact">
          Let’s talk <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
