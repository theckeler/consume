import { useRouter } from 'next/router';
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/About.module.css'
import Meta from '../components/meta'

export async function getStaticProps() {
    const currentPage = "experience"

    return {
        props: {
            currentPage,
        },
    }
}

function About(props) {
    const router = useRouter();
    return (
        <>
            <Meta title="Experience" />

            <Header currentPage="experience" />

            <section className="section">
                <h1 className="title">Experience</h1>
            </section>

            <section className={'wrapper ' + styles.content}>

                <ul>
                    <li>NAS Recruitment Innovation</li>
                    <li>UI Developer</li>
                    <li>Dates Employed: Aug 2019 – Present</li>
                </ul>

                <ul>
                    <li>Consume Design LLC</li>
                    <li>Freelance Graphic & Web Designer</li>
                    <li>Dates Employed: Dec 1997 – Present</li>
                </ul>

                <ul>
                    <li>DigitalDay</li>
                    <li>Web Designer</li>
                    <li>Dates Employed: Jun 2000 – Nov 2001</li>
                </ul>

                <ul>
                    <li>Digital Navigation</li>
                    <li>Interactive Designer</li>
                    <li>Dates Employed: Jul 1999 – Jul 2000</li>
                </ul>

                <ul>
                    <li>Karen Skunta & Company</li>
                    <li>Web Designer</li>
                    <li>Dates Employed: Jun 1998 – Jun 1999</li>
                </ul>

                <ul>
                    <li>Cleveland Live (cleveland.com)</li>
                    <li>Web Designer</li>
                    <li>Dates Employed: Jan 1997 – Jun 1998</li>
                </ul>

            </section>

            <Footer currentPage="about"></Footer>
        </>
    )
}

export default About