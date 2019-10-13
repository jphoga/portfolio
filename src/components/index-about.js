import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography"

const IndexPart = (props) => {
  const query = useStaticQuery(graphql`
  fragment squareImage2 on File {
    childImageSharp {
      fixed(width: 1800, height: 1300) {
        src
        originalName
      }
    }
  }, 
  query {
    image2: file(relativePath: { eq: "undraw_Mobile_application_mr4r (2).png" }) {
      ...squareImage2
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

  const linkToLinkedin = ' ' + query.site.siteMetadata.social.linkedin.link;
  const hitMe = ' Hit me up on Linkedin!'; 

  return (
    <div
    style={{
      display: `flex`,
      flexWrap: 'wrap-reverse',
      marginBottom: rhythm(4),
    }}
    className={styles.partContainer}
    >
      <Image
          fixed={query.image2.childImageSharp.fixed}
          className={styles.aboutImage}
          imgStyle={{
            //borderRadius: `50%`,
          }}
        />
      <div className={styles.aboutContainer}>
      <Link style={{ boxShadow: `none` }} to='/about'>
        <header className={styles.aboutTitle}>
          About me
        </header>
      </Link>  
        <main className={styles.aboutContent}>
          <p>Hi, my name is Jan. I am a German switching between 
          life in Germany and Japan. I am very lucky that while working as a consultant 
          I can still follow my passion in programming and technology.  
          <a style={{ boxShadow: `none`, fontWeight: `bold`}} target='_blank' href={linkToLinkedin}>
            {hitMe}
          </a>  </p>
        </main>
      </div>
    </div>
  )
}

export default IndexPart