import styles from '../styles/Home.module.css'

//components
import Navbar from "../components/Navbar"

export default function Home() {

  return (
    <div className={styles.container}>
      <Navbar/>
      <h1>Hello World Next.js</h1>
    </div>
  )
}
