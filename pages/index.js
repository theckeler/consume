import styles from '../styles/Index.module.css'
import Nav from '../components/header'
import Portfolio from '../components/portfolio'
//import Link from 'next/link'
import Meta from '../components/meta'

export default function Home() {
  return (
    <>
      <Meta title="Home" />

      <Nav className={styles.nav}></Nav>

      <section className="section">
        <h1 className="title">Title</h1>
      </section>

      <Portfolio className={styles.nav}></Portfolio>

    </>
  )
}
