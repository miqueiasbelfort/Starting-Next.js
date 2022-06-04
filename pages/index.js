import styles from '../styles/Home.module.css'

import Head from "next/head"
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keyworkds" content='Roupas, Calçados, Boné'></meta>
        <meta name="description" content='Enconte a melhor roupa para você!'></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World Next.js</h1>
        <Image
          src="/images/girl.jpg"
          width="220px"
          height="400px"
          alt="lofi girl"
        />
      </div>
    </>
  )
}
