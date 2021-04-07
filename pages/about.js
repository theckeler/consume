import { useRouter } from 'next/router';
import Header from '../components/header'
import styles from '../styles/About.module.css'
import Meta from '../components/meta'

export default function Post() {
    // useRouter returns the router object
    const router = useRouter();

    console.log({ router });
    return (
        <>
            <Meta
                title="About"
            />

            <Header></Header>

            <section className="section">
                <h1 className="title">About</h1>
            </section>

            <footer className={styles.footer}>

            </footer>
        </>
    )
}