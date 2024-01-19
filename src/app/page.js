import { SessionProvider } from "next-auth/react"
import styles from './page.module.css'
import LatestPosts from './components/latestPosts/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <LatestPosts/>
    </main>
  )
}
