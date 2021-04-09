import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import Nav from './nav'

const Footer = (props) => (
    < footer id="footer" className={styles.footer} >
        <div className={'wrapper ' + styles.wrapper}>
            <Nav currentPage={props.currentPage} />
        </div>
    </footer >
)

export default Footer