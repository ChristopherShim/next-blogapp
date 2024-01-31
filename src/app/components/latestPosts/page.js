"use client";

import data from "../../data/blogs.json";
import styles from "./page.module.css";
import PostCard from "../postCard/page";
import { useGlobalState } from "@/app/context/globalProvider";
import axios from "axios";

export default function LatestPosts() {
  async function showBlogs(){
    const res = await axios.get("/api/blogs")
    console.log(res.json())
  }
  return (
    <div>
      <h1>Blogs</h1>
      <div className={styles.cardContainer}>
        {data.map((d) => {
          return (
            <PostCard
              key={d.id}
              title={d.title}
              author={d.author}
              date={d.date}
              tags={d.tags}
            />
          );
        })}
      </div>
      <button onClick={showBlogs}>Click Here</button>
    </div>
  );
}
