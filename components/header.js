import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
//import { useRouter } from 'next/router'

//const router = useRouter();

const handleClick = (e) => {
    console.log('My object: ', e);
    document.getElementById("header").classList.toggle(styles.active);
    document.getElementById("hamburger").classList.toggle(styles.active);
    document.getElementsByTagName('body')[0].classList.toggle(styles.active);
}

const Header = ({ currentPage }) => (
    <header id="header" className={styles.header}>
        <div className={'wrapper ' + styles.wrapper}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Image
                            src="/images/logo.svg"
                            height={80}
                            width={300}
                            alt="Consume Design"
                            layout="responsive"
                        />
                    </a>
                </Link>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        {currentPage == 'about' ? (
                            <a>About</a>
                        ) : (
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        )}
                    </li>
                    <li>
                        {currentPage == 'about' ? (
                            <a>About</a>
                        ) : (
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        )}
                    </li>
                    <li>
                        {currentPage == 'about' ? (
                            <a>About</a>
                        ) : (
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        )}
                    </li>
                </ul>
            </nav >

            <ul id="hamburger" className={styles.hamburger} onClick={handleClick}>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </header >
)

export default Header