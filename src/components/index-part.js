import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";

import { rhythm, scale } from "../utils/typography"

const IndexPart = (props) => {
  const query = useStaticQuery(graphql`
    fragment squareImage on File {
        childImageSharp {
          fixed(width: 1400, height: 700) {
            src
            originalName
          }
        }
    }, 
    query {
        image1: file(relativePath: { eq: "undraw_personal_site_xyd1.png" }) {
          ...squareImage
        }
        image2: file(relativePath: { eq: "undraw_insert_block_efyb.png" }) {
          ...squareImage
        }
        image3: file(relativePath: { eq: "undraw_world_9iqb.png" }) {
          ...squareImage
        }
        image4: file(relativePath: { eq: "undraw_mobile_life_381t.png" }) {
            ...squareImage
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
  const position = props.position;
  const imageData = `query.image${position}.childImageSharp.fixed`;

  return (
    <div
      style={{
        display: `flex`,
        marginTop: rhythm(2.5),
        marginBottom: rhythm(7.5),
      }}
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>JAN PAUL HOGA</div>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.profile}>CONSULTANT | FULL-STACK DEVELOPER</div>
        </main>
      </div>
      <Image
          fixed={query.image1.childImageSharp.fixed}
          style={{
            marginLeft: rhythm(1 / 4),
            marginBottom: 0,
            minWidth: 800,
            minHeight: 400,
          }}
          imgStyle={{
            //borderRadius: `50%`,
          }}
        />
    </div>
  )
}

export default IndexPart