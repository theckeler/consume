import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Portfolio.module.css'
//import { useRouter } from 'next/router'

//const router = useRouter();

const handleClick = (e) => {
    console.log('My object: ', e);
    document.getElementById("header").classList.toggle(styles.active);
    document.getElementById("hamburger").classList.toggle(styles.active);
    document.getElementsByTagName('body')[0].classList.toggle(styles.active);
}

const Portfolio = ({ currentPage }) => (
    <section className={styles.section}>
        <div className={'wrapper ' + styles.wrapper}>


            <ul className="grid">
                <li className={styles.card}>
                    <Link href="/about">
                        <a>
                            <strong>Card Title</strong>
                            <p>Desc</p>
                        </a>
                    </Link>
                </li>
                <li className={styles.card}>
                    <Link href="/about">
                        <a>
                            <strong>Card Title</strong>
                            <p>Desc</p>
                        </a>
                    </Link>
                </li>
                <li className={styles.card}>
                    <Link href="/about">
                        <a>
                            <strong>Card Title</strong>
                            <p>Desc</p>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </section>
)

export default Portfolio