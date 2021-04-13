import React from "react"
import Header from '../../components/header'
import Footer from '../../components/footer'
import Meta from '../../components/meta'
import axios from 'axios'
import portfolioStyles from '../../styles/Portfolio.module.css'
import Image from 'next/image'

export async function getStaticPaths() {
    //const res = await axios.get('https://admin.consumedesign.com/wp-json/wp/v2/posts/?categories=15&per_page=100')

    const res = await fetch('https://admin.consumedesign.com/wp-json/wp/v2/posts/?categories=15&per_page=100')

    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    //  debugger
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch('https://admin.consumedesign.com/wp-json/wp/v2/posts/?slug=' + params.slug + '&_embed')
    const postal = await res.json()
    const finalPost = postal[0]

    //debugger
    return { props: { finalPost } }
}

function Post(props) {
    console.log(props)

    return (
        <>
            <Meta title="Portfolio" />

            <Header currentPage="portfolio" className={portfolioStyles.nav} />

            <section className="section">
                <h1 className="title">{props.finalPost.title.rendered}</h1>
            </section>

            <section className="section">

            </section>

            <Footer currentPage="portfolio"></Footer>
        </>
    )
}

export default Post