import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";

import { rhythm, scale } from "../utils/typography"

const IndexPart = (props) => {
  const query = useStaticQuery(graphql` 
    fragment squareImage1 on File {
      childImageSharp {
        fixed(width: 1500, height: 1000) {
          src
          originalName
        }
      }
  }, 
  query {
      image1: file(relativePath: { eq: "undraw_adventure_4hum.png" }) {
        ...squareImage1
      }
      site {
        siteMetadata {
          author
          social {
            instagram
            linkedin
            github
            email
          }
        }
      }
    },
    `
  )

  const { author, social } = query.site.siteMetadata;

  return (
    <div
      style={{
        display: `flex`,
        flexWrap: 'wrap',
        // marginTop: rhythm(2.5),
        marginBottom: rhythm(3.5),
      }}
    >
      <div className={styles.introContainer}>
        <header className={styles.headerTitle}>
          JAN PAUL HOGA
        </header>
        <main className={styles.mainContent}>
          CONSULTANT | FULL-STACK DEVELOPER
        </main>
        <footer style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: rhythm(2.5),
          fontSize: `3rem`,
          }}>
          <a href={social.github}>
            <i class="fab fa-github-square"></i>
          </a>
          <a href={social.linkedin}>
          <i class="fab fa-linkedin"></i>
          </a>
          <a href={social.email}>
            <i class="fas fa-at"></i>
          </a>
        </footer>
      </div>
      <Image
          fixed={query.image1.childImageSharp.fixed}
          style={{
            marginLeft: rhythm(1 / 4),
            marginBottom: 0,
            minWidth: 600,
            minHeight: 500,
          }}
          imgStyle={{
            //borderRadius: `50%`,
          }}
        />
    </div>
  )
}

export default IndexPart