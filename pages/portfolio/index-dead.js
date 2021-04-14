import Header from '../../components/header'
import Footer from '../../components/footer'
import Meta from '../../components/meta'
import axios from 'axios'
import React, { Component } from 'react'
import portfolioStyles from '../../styles/Portfolio.module.css'
import Image from 'next/image'
import Link from 'next/link'

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            wpPage: 1,
            posts: [],
            outputPosts: [],
            scrollToThis: null,
            postCount: 0,
            postCheck: []
        };
    }

    componentWillMount() {
        this.getPosts(1)
    }

    getPosts = (wpPage) => {
        const url = 'https://admin.consumedesign.com/wp-json/wp/v2/posts/?categories=15&per_page=100&_embed';

        axios.get(url)
            .then(response => {
                const outputPosts = [...this.state.outputPosts, ...response.data]

                this.setState({
                    outputPosts: outputPosts,
                    wpPage: (wpPage + 1),
                    posts: response.data,
                    scrollToThis: response.data[0].slug,
                    postCount: outputPosts.length + 1,
                })

            })
            .then(response => {
                document.getElementById("portfolio-main").classList.add("active");
                document.getElementById("portfolio-button").classList.add("active");
                document.getElementById("portfolio-container").classList.remove("loading");
            })
            .catch(error => {
                document.getElementById("portfolio-button").classList.remove("active");
            })
    }

    /*

handleClick = (e) => {
    e.preventDefault()


    $.fancybox.open({
        src: e.currentTarget.href,
        opts: {
            clickContent: false,
            buttons: [
                "close"
            ],
        }
    });
}
    */

    loadMore = (postCount) => {
        //e.preventDefault()
        this.getPosts(this.state.wpPage)
        //const scrollToMe = '#' + this.state.scrollToThis
        // console.log(postCount)

        document.getElementById("portfolio-main").classList.remove("active")
        document.getElementById("portfolio-button").classList.remove("active")
        document.getElementById("portfolio-container").classList.add("loading")
        //this.refs[i].scrollIntoView({ block: 'end', behavior: 'smooth' });
        //  window.scrollTo(0, topHight);
    }

    handleLoad = (e, postID) => {
        //e.classList.remove("loading")
        //console.log(postID)
        document.getElementById(postID).classList.remove("loading");
    }

    render() {
        return (
            <>
                <Meta title="Portfolio" />

                <Header currentPage="portfolio" className={portfolioStyles.nav} />

                <section className="section">
                    <h1 className="title">portfolio</h1>
                </section>

                <section className={portfolioStyles.section}>
                    <div id="portfolio-container" className={'load page loading wrapper '}>

                        <ul className="grid" id="portfolio-main">
                            {
                                this.state.outputPosts.map(post => {
                                    const ref = React.createRef();
                                    const postID = post.id

                                    const content = post.content.rendered;

                                    if ('wp:featuredmedia' in post._embedded) {
                                        //  console.log(post)
                                        return (
                                            <li className={portfolioStyles.card + ' card loading'} id={post.id} key={post.id} ref={ref[post.id]}>
                                                <Link href={'/portfolio/' + post.slug}>
                                                    <a>
                                                        <strong dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                        <Image
                                                            src={post._embedded['wp:featuredmedia']['0'].source_url}
                                                            height={post._embedded["wp:featuredmedia"][0].media_details.height}
                                                            width={post._embedded["wp:featuredmedia"][0].media_details.width}
                                                            alt={post.title.rendered}
                                                            onLoad={(event, postID) => this.handleLoad(event, post.id)}
                                                        />
                                                        {content.length > 0 &&
                                                            <div className={portfolioStyles.content} dangerouslySetInnerHTML={{ __html: content }} />
                                                        }

                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li className="hidden" key={post.id} ref={ref[post.id]}>
                                                <a></a>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                        <a id="portfolio-button" onClick={this.loadMore.bind(this, this.state.postCount)} page={this.state.wpPage} className="hidden button">Load More</a>
                    </div>

                </section>

                <Footer currentPage="portfolio"></Footer>
            </>
        )
    }


    componentDidMount(props) {

    }
}

export default Portfolio