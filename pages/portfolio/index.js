import Header from '../../components/header'
import Footer from '../../components/footer'
import Meta from '../../components/meta'
import React, { Component } from 'react'
import portfolioStyles from '../../styles/Portfolio.module.css'
import Image from 'next/image'

class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            hasNextPage: true,
            endCursor: [],
            startCursor: [],
            loading: [],
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);
    }

    handleObserver(entities, observer) {
        if (entities[0].intersectionRatio && this.state.hasNextPage == true) {
            this.getPosts()
            //  debugger
        }
    }

    getPosts = () => {
        document.getElementById("observer").classList.add("loading");
        fetch('https://admin.consumedesign.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
query MyQuery {
  posts(where: {categoryId: 15}, first: 12, after: "${this.state.endCursor}") {
    pageInfo {
      hasNextPage
      endCursor
      startCursor
    }
    edges {
      node {
        id
        title
        content
        dateGmt
        link
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
            mediaDetails {
              height
              width
              sizes {
                height
                width
                name
              }
            }
            mediaItemUrl
            srcSet
          }
        }
        categories {
          nodes {
            categoryId
          }
        }
      }
    }
  }
}
    `,
            }),
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    posts: [...this.state.posts, ...response.data.posts.edges],
                    hasNextPage: response.data.posts.pageInfo.hasNextPage,
                    endCursor: response.data.posts.pageInfo.endCursor,
                    startCursor: response.data.posts.pageInfo.startCursor,
                    loading: true,
                })
                //document.getElementById("portfolio-container").classList.remove("loading");
            })
    }


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

    render() {
        return (
            <>
                <Meta title="Portfolio" />

                <Header currentPage="portfolio" className={portfolioStyles.nav} />

                <div className="main">
                    <section className="section">
                        <h1 className="title">portfolio</h1>
                    </section>

                    <section className={portfolioStyles.section}>
                        <div id="portfolio-container" className={' wrapper'}>

                            <ul className="grid" id="portfolio-main">
                                {
                                    this.state.posts.map(post => {
                                        const thisPost = post.node;
                                        const date = new Date(thisPost.dateGmt)
                                        console.log(thisPost)

                                        const mediumImg = thisPost.featuredImage.node.mediaDetails.sizes.find(({ name }) => name === 'medium');
                                        console.log(mediumImg)


                                        if (thisPost) {
                                            return (
                                                <li
                                                    className={portfolioStyles.card + ' card'}
                                                    key={thisPost.id}
                                                >
                                                    <a onClick={this.handleClick} href={thisPost.featuredImage.node.mediaItemUrl}>
                                                        <strong dangerouslySetInnerHTML={{ __html: thisPost.title }} />
                                                        <img
                                                            src={thisPost.featuredImage.node.sourceUrl}
                                                            srcSet={thisPost.featuredImage.node.srcSet}
                                                            height={mediumImg.height}
                                                            width={mediumImg.width}
                                                            alt={thisPost.title}
                                                        />
                                                        <div className={portfolioStyles.content}>
                                                            <span dangerouslySetInnerHTML={{ __html: thisPost.content }} />
                                                            <span><p>Date Created: {date.getFullYear()}</p></span>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                            <div id="observer" className={this.state.hasNextPage === true ? "observer loading" : "none"} ref={loadingRef => (this.loadingRef = loadingRef)} />
                        </div>
                    </section>
                </div>

                <Footer currentPage="portfolio"></Footer>
            </>
        )
    }
}

export default Portfolio