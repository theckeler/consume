import React, { Component } from 'react'
import portfolioStyles from '../styles/Portfolio.module.css'
import Image from 'next/image'

const handleClick = (e) => {
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

const Card = (props) => (
    <>
        <li
            className={portfolioStyles.card + ' ' + portfolioStyles.featured + ' card'}
            key={props.thisPost.id}
        >
            <a
                href={props.featured ? props.thisPost.link : props.thisPost.featuredImage.node.mediaItemUrl}
                target={props.featured ? '"_new"' : ''}
                onClick={props.featured ? undefined : handleClick}
            >
                <strong dangerouslySetInnerHTML={{ __html: props.thisPost.title }} />
                <Image
                    src={props.thisPost.featuredImage.node.sourceUrl}
                    srcSet={props.thisPost.featuredImage.node.srcSet}
                    height={props.thisPost.featuredImage.node.mediaDetails.height}
                    width={props.thisPost.featuredImage.node.mediaDetails.width}
                    alt={props.thisPost.title}
                />
                {props.featured ? (
                    <span className={portfolioStyles.extlink}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2v-7h-2v7H5V5h7V3H5zm9 0v2h3.586l-9.293 9.293 1.414 1.414L19 6.414V10h2V3h-7z" />
                        </svg>
                    </span>
                ) : (
                    ''
                )}
                <div className={portfolioStyles.content}>
                    <span dangerouslySetInnerHTML={{ __html: props.thisPost.content }} />
                    <span><p>Date Created: {props.date.getFullYear()}</p></span>
                </div>
            </a>
        </li>
    </>
)

export default Card