import styles from "./page.module.css";

export default function PostCard(props) {
  return (
    <div className={styles.cardMain}>
      <div className={styles.punchHoles}>
        <span className={styles.punchHole}></span>
        <span className={styles.punchHole}></span>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardHeader}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles.cardDetails}>
          <p>{props.author}</p>
          <p>{props.date}</p>
          <p>{props.tags}</p>
        </div>
      </div>
    </div>
  );
}
