import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";

import { rhythm } from "../utils/typography"

const IndexPart = (props) => {
  const query = useStaticQuery(graphql`
    fragment squareImage4 on File {
        childImageSharp {
          fixed(width: 1600, height: 800) {
            src
            originalName
          }
        }
    }, 
    query {
        image4: file(relativePath: { eq: "undraw_mobile_life_381t.png" }) {
            ...squareImage4
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
      <Image
        fixed={query.image4.childImageSharp.fixed}
        style={{
          marginLeft: rhythm(1 / 4),
          marginBottom: 0,
          mwidth: '32rem',
          height: '32rem',
        }}
        imgStyle={{
          //borderRadius: `50%`,
        }}
      />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>JAN PAUL HOGA</div>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.profile}>CONSULTANT | FULL-STACK DEVELOPER</div>
        </main>
      </div>
    </div>
  )
}

export default IndexPart