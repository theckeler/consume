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
        };
    }

    componentWillMount() {
        // console.log('componentWillMount')
        //this.getPosts()
    }

    componentDidMount() {
        //  console.log('componentDidMount')
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
        // console.log('handleObserver')
        //  console.log(entities[0].target)
        //console.log(entities[0].intersectionRatio)

        if (entities[0].intersectionRatio && this.state.hasNextPage == true) {
            //  console.log('load more')
            this.getPosts()
            //  observer.unobserve(entities[0].target);
        }
    }

    getPosts = () => {

        // console.log('getPosts')
        // console.log(this.state.startCursor)

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
            srcSet
            sourceUrl
            mediaDetails {
              height
              width
            }
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
                //console.log(response.data)

                this.setState({
                    posts: [...this.state.posts, ...response.data.posts.edges],
                    // posts: response.data.posts.edges,
                    hasNextPage: response.data.posts.pageInfo.hasNextPage,
                    endCursor: response.data.posts.pageInfo.endCursor,
                    startCursor: response.data.posts.pageInfo.startCursor,
                })

                // console.log(this.state)

                document.getElementById("portfolio-main").classList.add("active");
                document.getElementById("portfolio-container").classList.remove("loading");
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

                <section className="section">
                    <h1 className="title">portfolio</h1>
                </section>

                <section className={portfolioStyles.section}>
                    <div id="portfolio-container" className={'load page loading wrapper '}>

                        <ul className="grid" id="portfolio-main">
                            {
                                this.state.posts.map(post => {
                                    const thisPost = post.node;
                                    const date = new Date(thisPost.dateGmt)
                                    //console.log(thisPost)

                                    if (thisPost) {
                                        return (
                                            <li
                                                className={portfolioStyles.card + ' card loading'}
                                                key={thisPost.id}
                                            >
                                                <a onClick={this.handleClick} href={thisPost.featuredImage.node.sourceUrl}>
                                                    <strong dangerouslySetInnerHTML={{ __html: thisPost.title }} />
                                                    <Image
                                                        src={thisPost.featuredImage.node.sourceUrl}
                                                        height={thisPost.featuredImage.node.mediaDetails.height}
                                                        width={thisPost.featuredImage.node.mediaDetails.width}
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
                            <div className="observer" ref={loadingRef => (this.loadingRef = loadingRef)} />
                        </ul>
                    </div>

                </section>

                <Footer currentPage="portfolio"></Footer>
            </>
        )
    }
}

export default Portfolio