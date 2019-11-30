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
  const hitMe = ' hit me up on Linkedin!'; 
  const codingJourney = ' unusual coding journey'; 

  return (
    <div
    style={{
      display: `flex`,
      flexWrap: 'wrap-reverse',
      justifyContent: `center`,
      marginBottom: rhythm(4),
      //marginTop: rhythm(4),
      //backgroundImage: `-webkit-linear-gradient(-80deg, #F4F4F2 40%, white 40%)`,
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
          <p>Hi, I am Jan (pronounced 'Yan' thanks to the strange German alphabet). 
             I am a programmer and consultant living in beautiful Tokyo &nbsp;
             <i className="em em-cherry_blossom" aria-label="CHERRY BLOSSOM"></i>
            <i className="em em-tokyo_tower" aria-label="TOKYO TOWER"></i>
            <i className="em em-jp" aria-label="Japan Flag"></i>  
              &nbsp; Find out more about me and my rather 
            <a style={{ boxShadow: `none`, fontWeight: `bold`}} href="./about">
              {codingJourney}
            </a> and   
            <a style={{ boxShadow: `none`, fontWeight: `bold`}} target='_blank' href={linkToLinkedin}>
            {hitMe}
            </a>  
          </p>
        </main>
      </div>
    </div>
  )
}

export default IndexPart