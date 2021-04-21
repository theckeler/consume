import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import React, { Component } from 'react'
import portfolioStyles from '../styles/Portfolio.module.css'
import axios from 'axios'
import Image from 'next/image'


export async function getStaticProps() {
  const response = await axios({
    url: 'https://admin.consumedesign.com/graphql',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      query: `
      query MyQuery {
  posts(where: {categoryId: 43}) {
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
      }
    }
  }
}
      `
    }
  })

  // debugger

  return {
    props: {
      posts: response.data.data.posts.edges,
    },
  }

}

function Blog({ posts }) {

  return (
    <>
      <Meta title="Home" />

      <Header currentPage="home" className={portfolioStyles.nav} />

      <div className="main">
        <section className="section">
          <h1 className="title">Featured Projects</h1>
        </section>

        <section className={portfolioStyles.section}>
          <div className={'wrapper ' + portfolioStyles.wrapper}>

            <ul className="grid noload">
              {
                posts.map(post => {
                  const thisPost = post.node;
                  const date = new Date(thisPost.dateGmt)
                  //console.log(thisPost)
                  return (
                    <li
                      className={portfolioStyles.card + ' ' + portfolioStyles.featured + ' card'}
                      key={thisPost.id}
                    >
                      <a href={thisPost.link} target="_new">
                        <strong dangerouslySetInnerHTML={{ __html: thisPost.title }} />
                        <Image
                          src={thisPost.featuredImage.node.sourceUrl}
                          height={thisPost.featuredImage.node.mediaDetails.height}
                          width={thisPost.featuredImage.node.mediaDetails.width}
                          alt={thisPost.title}
                        />
                        <span className={portfolioStyles.extlink}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2v-7h-2v7H5V5h7V3H5zm9 0v2h3.586l-9.293 9.293 1.414 1.414L19 6.414V10h2V3h-7z" />
                          </svg>
                        </span>
                        <div className={portfolioStyles.content}>
                          <span dangerouslySetInnerHTML={{ __html: thisPost.content }} />
                          <span><p>Date Created: {date.getFullYear()}</p></span>
                        </div>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
      </div>

      <Footer currentPage="home" />
    </>
  )

}

export default Blog
