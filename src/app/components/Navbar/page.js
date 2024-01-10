import styles from "./pages.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link href="/">Home</Link>
      <div className={styles.navbarRight}>
      <a href="#write-blog">Write Blog</a>
      <a href="#resources">Resources</a>
      <Link href="/login">Login</Link>
      <a href="#signup">Sign Up</a>
      </div>
     
    </header>
  );
}
