import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";

import { rhythm, scale } from "../utils/typography"

const IndexPart = (props) => {
  const query = useStaticQuery(graphql`
    fragment squareImage3 on File {
        childImageSharp {
          fixed(width: 1400, height: 900) {
            src
            originalName
          }
        }
    }, 
    query {
        image3: file(relativePath: { eq: "undraw_world_9iqb.png" }) {
          ...squareImage3
        }
      site {
        siteMetadata {
          author
          social {
                      github {
                        link
                        icon
                      }
                      linkedin {
                        link
                        icon
                      }
                      email {
                        link
                        icon
                      }
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
        // marginTop: rhythm(2.5),
        marginBottom: rhythm(3.5),
      }}
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>Some projects I have done so far</div>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.profile}>CONSULTANT | FULL-STACK DEVELOPER</div>
        </main>
      </div>
      <Image
        fixed={query.image3.childImageSharp.fixed}
        style={{
          marginLeft: rhythm(1 / 4),
          marginBottom: 0,
          width: '32rem',
          height: '32rem',
        }}
        imgStyle={{
          //borderRadius: `50%`,
        }}
      />
    </div>
  )
}

export default IndexPart