import axios from "axios";
import styles from "./pages.module.css";
import { useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");

  const saveBlog = async (e) => {
    e.preventDefault();
    const data = { title, author, label, date, content };
    await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={saveBlog} className={styles.form}>
      <input
        type="text"
        className={styles.title}
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        className={styles.author}
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <input
        type="text"
        className={styles.author}
        placeholder="label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      ></input>
      <input
        type="date"
        className={styles.date}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <textarea
        className={styles.textarea}
        type="text"
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className={styles.save}>Save</button>
    </form>
  );
}
