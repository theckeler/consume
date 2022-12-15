import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";
import React, { Component } from "react";
import portfolioStyles from "../styles/Portfolio.module.css";
import axios from "axios";
import Image from "next/image";
import Card from "../components/card";

export async function getStaticProps() {
  const response = await axios({
    url: "https://admin.consumedesign.com/graphql",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
            sourceUrl(size: MEDIUM)
            mediaDetails {
              height
              width
            }
            mediaItemUrl
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
    },
  });

  // debugger

  return {
    props: {
      posts: response.data.data.posts.edges,
    },
  };
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
          <div className={"wrapper " + portfolioStyles.wrapper}>
            <ul className="grid noload">
              {posts.map((post) => {
                const thisPost = post.node;
                const date = new Date(thisPost.dateGmt);
                const mediumImg = "";

                //console.log(thisPost)

                return (
                  <Card
                    featured="1"
                    key={thisPost.id}
                    mediumImg={mediumImg}
                    date={date}
                    thisPost={thisPost}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </div>

      <Footer currentPage="home" />
    </>
  );
}

export default Blog;
