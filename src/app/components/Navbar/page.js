"use client";

import styles from "./pages.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <header className={styles.navbar}>
        <Link href="/">Home</Link>
        <div className={styles.navbarRight}>
          <Link href="/write-blog">Write Blog</Link>
          <Link href="/resources">Resources</Link>
          <button className={styles.authButton}  onClick={() => signIn()}>Login/Signup</button>
        </div>
      </header>
    );
  }

  if (session) {
    return (
      <>
        <header className={styles.navbar}>
        <Link href="/">Home</Link>
        <div className={styles.navbarRight}>
          <Link href="/write-blog">Write Blog</Link>
          <Link href="/resources">Resources</Link>
          <button className={styles.authButton} onClick={() => signOut()}>Sign Out</button>
        </div>
      </header>
        
      </>
    );
  }

  // return (
  //   <header className={styles.navbar}>
  //     <Link href="/">Home</Link>
  //     <div className={styles.navbarRight}>
  //     <a href="#write-blog">Write Blog</a>
  //     <a href="#resources">Resources</a>
  //     <Link href="/login">Login</Link>
  //     <a href="#signup">Sign Up</a>
  //     </div>

  //   </header>
  // );
}

export default function NavBar() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
