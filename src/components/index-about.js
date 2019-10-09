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
  const hitMe = ' Hit me up!'; 

  return (
    <div
    style={{
      display: `flex`,
      flexWrap: 'wrap-reverse',
      // marginTop: rhythm(2.5),
      marginBottom: rhythm(3.5),
    }}
    >
      <Image
          fixed={query.image2.childImageSharp.fixed}
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
      <div className={styles.aboutContainer}>
      <Link style={{ boxShadow: `none`, color: '#4285f4' }} to='/about'>
        <header className={styles.aboutTitle}>
          About me
        </header>
      </Link>  
        <main className={styles.aboutContent}>
          <p>Hi, my name is Jan. I am a German switching between 
          life in Germany and Japan. I am very lucky that while working as a consultant 
          I can still follow my passion in programming and technology.  
          <a style={{ boxShadow: `none`, color: '#4285f4' }} target='_blank' href={linkToLinkedin}>
            {hitMe}
          </a>  </p>
        </main>
      </div>
    </div>
  )
}

export default IndexPart