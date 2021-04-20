import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import React, { Component } from 'react'
import portfolioStyles from '../styles/Portfolio.module.css'
import axios from 'axios'
import Image from 'next/image'


export async function getStaticProps() {
  const response = await axios.get('https://admin.consumedesign.com/wp-json/wp/v2/posts/?categories=43&_embed&per_page=8')

  return {
    props: {
      wpPage: 1,
      posts: response.data,
      outputPosts: response.data,
      scrollToThis: null,
      postCount: 0,
      postCheck: []
    },
  }
}



function Blog({ posts }) {

  return (
    <>
      <Meta title="Home" />

      <Header currentPage="home" className={portfolioStyles.nav} />

      <section className="section">
        <h1 className="title">Featured Projects</h1>
      </section>

      <section className={portfolioStyles.section}>
        <div className={'wrapper ' + portfolioStyles.wrapper}>

          <ul className="grid noload">
            {console.log(posts)}
            {
              posts.map(post => {
                const date = new Date(post.date)
                return (
                  <li className={portfolioStyles.featured + ' ' + portfolioStyles.card} key={post.slug}>
                    <a href={post.link} target="_blank" data-caption={post.title.rendered}>
                      <strong>{post.title.rendered}</strong>
                      <Image
                        src={post._embedded['wp:featuredmedia']['0'].source_url}
                        height={post._embedded["wp:featuredmedia"][0].media_details.height}
                        width={post._embedded["wp:featuredmedia"][0].media_details.width}
                        alt={post.title.rendered}
                        layout="responsive"
                      />
                      <span className={portfolioStyles.extlink}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2v-7h-2v7H5V5h7V3H5zm9 0v2h3.586l-9.293 9.293 1.414 1.414L19 6.414V10h2V3h-7z" />
                        </svg>
                      </span>
                      <div className={portfolioStyles.content}>
                        <span dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
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


      <Footer currentPage="home" />
    </>
  )

}

export default Blog
