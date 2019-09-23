import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";

import { rhythm, scale } from "../utils/typography"

const IndexPart = (props) => {
  const query = useStaticQuery(graphql`
  fragment squareImage2 on File {
    childImageSharp {
      fixed(width: 1300, height: 1300) {
        src
        originalName
      }
    }
  }, 
  query {
    image2: file(relativePath: { eq: "undraw_post_online_dkuk.png" }) {
      ...squareImage2
    }
  site {
    siteMetadata {
      author
      social {
        instagram
      }
    }
  }
}, 
    `
  )

  return (
    <div
      style={{
        display: `flex`,
        flexWrap: 'wrap',
        marginBottom: rhythm(3.5),
      }}
    >
      <Image
          fixed={query.image2.childImageSharp.fixed}
          style={{
            marginLeft: rhythm(1 / 4),
            marginBottom: 0,
            minWidth: 500,
            minHeight: 600,
          }}
          imgStyle={{
            //borderRadius: `50%`,
          }}
        />
      <div className={styles.aboutContainer}>
        <header className={styles.aboutTitle}>
         About me
        </header>
        <main className={styles.aboutContent}>
          <p>Hi, my name is Jan. I am a German switching between 
          life in Germany and Japan every few years. Working as Consulting for some time, I found a new passion
          in web and deep learning engineering. Hit me up!</p>
        </main>
      </div>
    </div>
  )
}

export default IndexPart