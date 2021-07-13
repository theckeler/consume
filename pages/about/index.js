import { useRouter } from 'next/router';
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from '../../styles/About.module.css'
import Meta from '../../components/meta'

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

            <div className="main">
                <section className="section">
                    <h1 className="title">About</h1>
                </section>

                <section className={'wrapper ' + styles.content}>
                    <p>Experienced freelance graphic designer with a demonstrated history of working in the interactive design industry. Skilled in jQuery, JavaScript, CSS, HTML, Sass, Responsive Web Design, Web Design, Page Layout, and Cross-browser Compatibility. Strong arts and design professional with a Bachelor of Arts focused in Visual Communication & Design from Kent State University.</p>

                    <p>Provided print design, website design, website UX, website programming, and website UI for local and national clients.</p>

                    <p><strong>Current and past client list includes:</strong></p>

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
                </section>

                <section className="section">
                    <h1 className="title">Skills</h1>
                </section>

                <section className={'wrapper ' + styles.content}>
                    <p>Expertise in</p>
                    <ul className={styles.list}>
                        <li>Backpacking</li>
                        <li>Mountain Biking</li>
                        <li>Camping</li>
                        <li>HTML/HTML5</li>
                        <li>CSS/CSS3</li>
                        <li>SASS/LESS</li>
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
                        <li>MySQL</li>
                        <li>JSON</li>
                        <li>AJAX</li>
                        <li>Git/Github</li>
                        <li>Web Accessibility Standards (WCAG)</li>
                        <li>Figma</li>
                    </ul>

                    <p>Knowlege of</p>
                    <ul className={styles.list}>
                        <li>AngularJS</li>
                        <li>Python</li>
                        <li>ASP</li>
                        <li>Node.js</li>
                        <li>C#</li>
                        <li>REST API</li>
                    </ul>

                </section>

                <section className="section">
                    <h1 className="title">Experience</h1>
                </section>

                <section className={'wrapper grid ' + styles.exp}>

                    <ul>
                        <li className={styles.title}>Freelance Graphic Designer 12/1996 - Present</li>
                        <li>
                            <p>Provided print design, website design, website UX, website programming, and website UI for local and national clients.</p>
                            <p><strong>Clients include:</strong> Alliance Bicycles, Bike Cleveland, Cleveland Film Society, Curt Goodrich Bicycles, Don Walker Cycles, Dream Hammock, Endless Bikes, Ibis Cycles, LiteAF, Kirk Frameworks, Modern Dog Design, Montana Fine Furniture, Mtn Air Roasting, Naked Bicycles &amp; Design, Nesnadny + Schwartz, North AmericanHandmade Bicycle Show, Pursuit Cycles, Rockgeist, Strong Frames, UGQ Outdoor, Werner Paddles</p>
                        </li>
                    </ul>

                    <ul>
                        <li className={styles.title}>UX/UI Graphic Designer, MTD Products 7/2021- Present</li>
                        <li>
                            <p><strong>Clients include:</strong> Cub Cadet, Troy-Bilt, Rover, MTD Genuine Parts, WOLF-Garten, Yard Machines</p>
                        </li>
                    </ul>

                    <ul>
                        <li className={styles.title}>UI Developer, NAS Recruitment Innovation 8/2019 - 7/2021</li>
                        <li>
                            <p>Created and maintained C# HTML webpages in ASP.NET Razor using HTML, SASS, Javascript, and jQuery from provided comps, Developed a new BASE CSS for the NAS Active Platform, Implemented new scripting language, Created new processes for increased efficiency, <strong>Awarded Q4 2020 Employee of the Quarter.</strong></p>
                            <p><strong>Clients include:</strong> Bahama Breeze, BigLots, Cinemark, Cheddar’s Scratch Kitchen, Clarivate, Darden SRG, DentWizard, Longhorn Steakhouse, Olive Garden, OU Medicine, Papa John’s, Red Lobster, ROSS, United Rentals, Value City Furniture</p>
                        </li>
                    </ul>

                    <ul><li className={styles.title}>DigitalDay</li><li>Interactive Designer</li><li>Dates Employed: Jun 2000 – Nov 2001</li></ul>

                    <ul><li className={styles.title}>Digital Navigation</li><li>Interactive Designer</li><li>Dates Employed: Jul 1999 – Jul 2000</li></ul>

                    <ul><li className={styles.title}>Karen Skunta &amp; Company</li><li>Interactive Designer</li><li>Dates Employed: Jun 1998 – Jun 1999</li></ul>

                    <ul><li className={styles.title}>Cleveland Live (cleveland.com)</li><li>Interactive Designer</li><li>Dates Employed: Jan 1997 – Jun 1998</li></ul>

                </section>
            </div>

            <Footer currentPage="about"></Footer>
        </>
    )
}

export default About