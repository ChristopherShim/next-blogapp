"use client"

import styles from "./pages.module.css"

export default function WriteBlog(){
    return (
        <div className={styles.h1}>
        <h1>Write a Blog</h1>

        <div className={styles.form}>
            <input type="text" placeholder="title"></input>
            <input type="text" placeholder="author"></input>
            <input type="number" placeholder="date"></input>
            <textarea className={styles.textarea} type="text" placeholder="Body Content" value="Body Content"></textarea>
        </div>
        </div>
    )
}