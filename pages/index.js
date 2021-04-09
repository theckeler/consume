import Header from '../components/header'
import Footer from '../components/footer'
import Meta from '../components/meta'
import React, { Component } from 'react'
import portfolioStyles from '../styles/Portfolio.module.css'
import axios from 'axios'


export async function getStaticProps() {
  const response = await axios.get('https://consumedesign.com/wp-json/wp/v2/posts/?categories=43&_embed&per_page=8')
  console.log(response.data)
  return {
    props: {
      posts: response.data
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

          <ul className="grid">
            {

              posts.map(post => {
                const fullImage = post._embedded['wp:featuredmedia']['0'].source_url
                const medImage = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url

                return (
                  <li className={portfolioStyles.featured + ' ' + portfolioStyles.card} key={post.slug}>
                    <a href={post.link} target="_blank" data-caption={post.title.rendered}>
                      <strong>{post.title.rendered}</strong>
                      <img src={medImage} alt="{post.title.rendered}"></img>
                      <span className={portfolioStyles.extlink}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2v-7h-2v7H5V5h7V3H5zm9 0v2h3.586l-9.293 9.293 1.414 1.414L19 6.414V10h2V3h-7z" />
                        </svg>
                      </span>
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
