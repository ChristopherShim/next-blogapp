"use client"

import styles from "./pages.module.css"
import BlogForm from "../components/BlogForm/page"

export default function WriteBlog(){
    return (
        <div className={styles.h1}>
        <h1>Write a Blog</h1>
            <BlogForm/>
        </div>
    )
}