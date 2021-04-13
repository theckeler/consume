import React from "react"
import Header from '../../components/header'
import Footer from '../../components/footer'
import Meta from '../../components/meta'
//import axios from 'axios'
import portfolioStyles from '../../styles/Portfolio.module.css'
import Image from 'next/image'

function Post(props) {
    console.log(props.post)

    return (
        <>
            <Meta title="Portfolio" />

            <Header currentPage="portfolio" className={portfolioStyles.nav} />

            <section className="section">
                <h1 className="title">portfolio</h1>
            </section>

            <section className="section">
                <div>{props.post}</div>
                <div>{props.url}</div>
            </section>

            <Footer currentPage="portfolio"></Footer>
        </>
    )
}


// If the route is like /posts/1, then params.id is 1
//const res = await fetch(`https://admin.consumedesign.com/wp-json/wp/v2/posts/${params.id}`)
//  const res = await fetch('https://admin.consumedesign.com/wp-json/wp/v2/posts/'{params.id})
//  const post = await res.json()

// Pass post data to the page via props
//return { props: { post } }

export async function getStaticProps({ params }) {
    try {
        const url = 'https://admin.consumedesign.com/wp-json/wp/v2/posts/' + params.id + '/'
        const response = await fetch(url)
        const post = await response.data.json()
        //const post = await response.text()

        return {
            props: {
                url,
                post,
                params,
            },
        }

    } catch (e) {
        console.log(e)

        post = 'Error'
    }
    //const post = params.id


}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export default Post