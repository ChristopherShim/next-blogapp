import data from "../../data/blogs.json";
import styles from "./page.module.css"
import PostCard from "../postCard/page";

export default function LatestPosts() {
  console.log(data);
  return (
    <div>
      <h1>Blogs</h1>
      <div className={styles.cardContainer}>
        {data.map((d) => {
          return (
            <PostCard
            key = {d.id}
              title={d.title}
              author={d.author}
              date={d.date}
              tags={d.tags}
            />
          );
        })}
      </div>
    </div>
  );
}
