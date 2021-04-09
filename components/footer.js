import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Nav from './nav'

const Footer = (props) => (
    < footer id="footer" className={styles.footer} >
        <div className={'wrapper ' + styles.wrapper}>
            <div className={styles.madewith}>
                <strong>V1.0</strong> Made with <a href="https://nextjs.org/" target="_blank">Next.js</a>/SASS/React deployed on <a href="https://vercel.com/">vercel.com</a> using a headless <a href="https://wordpress.org/">WordPress</a>.
            </div>
            <Nav currentPage={props.currentPage} />
        </div>
    </footer >
)

export default Footer