import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from '../components/Layout'
import utilStyle from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>大学生エンジニアです/Linuxカーネル読めるようになりたい</p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝勉強記録</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img 
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
                
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか</a>
            </Link>
            <br></br>
            <small className={utilStyle.lightText}>
              May 21, 2022
            </small>
          </article>
          <article>
            <Link href="/">
              <img 
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
                
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか</a>
            </Link>
            <br></br>
            <small className={utilStyle.lightText}>
              May 21, 2022
            </small>
          </article>
          <article>
            <Link href="/">
              <img 
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
                
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか</a>
            </Link>
            <br></br>
            <small className={utilStyle.lightText}>
              May 21, 2022
            </small>
          </article>
          <article>
            <Link href="/">
              <img 
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
                
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか</a>
            </Link>
            <br></br>
            <small className={utilStyle.lightText}>
              May 21, 2022
            </small>
          </article>
        </div>
      </section>
      
    </Layout>
  )
}
