import { useRouter } from 'next/router';
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/About.module.css'
import Meta from '../components/meta'

export async function getStaticProps() {
    const currentPage = "about"

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
            <Meta title="About" />

            <Header currentPage="about" />

            <section className="section">
                <h1 className="title">About</h1>
            </section>

            <section className={'wrapper ' + styles.content}>
                <p>Experienced Freelance Graphic Web Designer with a demonstrated history of working in the graphic design industry. Skilled in PHP, jQuery, JavaScript, CSS, HTML, Sass, Responsive Web Design, Web Design, Website Administration, Page Layout, and Cross-browser Compatibility. Strong arts and design professional with a Bachelor of Arts focused in Visual Communication & Design from Kent State University.</p>

                <p>Freelance print design, website design, website UI, and website UX for local and national clients.</p>

                <p>Current and past client list includes:</p>

                <ul className={styles.list}>
                    <li>Alliance Bicycles</li>
                    <li>Bike Cleveland</li>
                    <li>Cleveland Film Society</li>
                    <li>Curt Goodrich Bicycles</li>
                    <li>Don Walker Cycles</li>
                    <li>Dream Hammock LLC</li>
                    <li>Endless Bikes</li>
                    <li>Ibis Cycles</li>
                    <li>LiteAF LLC</li>
                    <li>Kirk Frameworks</li>
                    <li>Modern Dog Design Co.</li>
                    <li>Montana Fine Furniture</li>
                    <li>Mtn Air Roasting</li>
                    <li>Naked Bicycles & Design</li>
                    <li>Nesnadny + Schwartz</li>
                    <li>North American Handmade Bicycle Show</li>
                    <li>Pursuit Cycles LLC</li>
                    <li>Rockgeist</li>
                    <li>Ruff Rollin’</li>
                    <li>Strong Frames, Inc.</li>
                    <li>UGQ Outdoor LLC</li>
                    <li>Valentine Distilling</li>
                    <li>Werner Paddles</li>
                </ul>

                <p>Expertise in</p>
                <ul className={styles.list}>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>Syntactically Awesome Style Sheets (Sass)</li>
                    <li>HTML</li>
                    <li>jQuery</li>
                    <li>UI</li>
                    <li>UX</li>
                    <li>Responsive Web Design</li>
                    <li>Wordpress</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                </ul>

                <p>Proficient in</p>
                <ul className={styles.list}>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>SVG</li>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                </ul>

                <p>Experienced in</p>
                <ul className={styles.list}>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                    <li>JSON</li>
                    <li>AJAX</li>
                    <li>Git</li>
                </ul>

                <p>Knowlege of</p>
                <ul className={styles.list}>
                    <li>AngularJS</li>
                    <li>Python</li>
                    <li>ASP</li>
                    <li>Node.js</li>
                </ul>

            </section>

            <Footer currentPage="about"></Footer>
        </>
    )
}

export default About