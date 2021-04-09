import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import axios from 'axios'
import React, { Component } from 'react'
import portfolioStyles from '../styles/Portfolio.module.css'

class Portfolio extends Component {
    constructor() {
        super();
        console.log('------------constructor--------------')
        this.state = {
            wpPage: 1,
            posts: []
        };
    }

    componentWillMount() {
        console.log('------------componentWillMount--------------')
        this.getPosts(1)
    }

    getPosts = (wpPage) => {
        console.log('------------getPosts--------------')
        //console.log('wpPage: ' + wpPage)

        const url = 'https://consumedesign.com/wp-json/wp/v2/posts/?page=' + wpPage + '&per_page=8&_embed';

        axios.get(url)
            .then(response => {
                //  console.log(response.data)

                this.setState({
                    wpPage: (wpPage + 1),
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    handleClick = (e) => {
        console.log('------------handleClick--------------')
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

    render() {
        { console.log('--------render--------') }

        //{ console.log('wpPage: ' + this.state.wpPage) }
        { console.log(this.state.posts) }

        return (
            <>
                <Meta title="Portfolio" />

                <Header currentPage="portfolio" className={portfolioStyles.nav} />

                <section className="section">
                    <h1 className="title">portfolio</h1>
                </section>

                <section className={portfolioStyles.section}>
                    <div className={'wrapper ' + portfolioStyles.wrapper}>

                        <ul className="grid" id="insert">
                            {
                                this.state.posts.map((post, index) => (
                                    <li className={portfolioStyles.card} key={post.slug}>
                                        <a onClick={this.handleClick} href={post._embedded['wp:featuredmedia']['0'].source_url} data-caption={post.title.rendered}>
                                            <strong>{post.title.rendered}</strong>
                                            <img src={post._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url} alt="{post.title.rendered}"></img>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <a onClick={() => this.getPosts(this.state.wpPage)} page={this.state.wpPage} className="button">View Page {this.state.wpPage}</a>
                    </div>

                </section>

                <Footer currentPage="portfolio"></Footer>
            </>
        )
    }


    componentDidMount(props) {
        console.log('------------componentDidMount--------------')
        // this.setState({ posts: this.getPosts(1) })
    }
}

export default Portfolio