import { House, Settings, History, Sun } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLogo}>
        <House />
      </a>
      <a href="#" className={styles.menuLogo}>
        <History />
      </a>
      <a href="#" className={styles.menuLogo}>
        <Settings />
      </a>
      <a href="#" className={styles.menuLogo}>
        <Sun />
      </a>
    </nav>
  );
}
