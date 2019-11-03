import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography"
import BackgroundImage from 'gatsby-background-image'

const IndexPart = (props) => {
  const query = useStaticQuery(graphql` 
    fragment squareImage1 on File {
      childImageSharp {
        fixed(width: 1600, height: 800) {
            src
            originalName
          }
        }
  }, 
  query {
      image1: file(relativePath: { eq: "tokyo-air.jpg" }) {
        ...squareImage1
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

  const { author, social } = query.site.siteMetadata;

  return (
    <div
      style={{
        display: `flex`,
        flexWrap: 'wrap',
        justifyContent: 'center',
        // marginTop: rhythm(2.5),
        marginTop: rhythm(4),
        marginBottom: rhythm(4),
      }} 
      className='additionals'
    >
      <div className={styles.introContainer}>
        <header className={styles.headerTitle}>
          Hi, I am Jan Paul.
        </header>
        <main className={styles.mainContent}>
          I am Consultant | Full-Stack developer located in Tokyo. 
        </main>
        <ul style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: rhythm(2.5),
          fontSize: `3.3rem`,
          }}>
          {Object.keys(social).map((keyName, i) => (
              <a style={{ boxShadow: `none`, marginLeft: `1rem`, marginRight: `0.2rem`, fontSize: `48px` }} target="_blank" href={social[keyName].link}>
                <i className={social[keyName].icon} ></i>
              </a>
            
          ))}
        </ul>

{/*       

  

 <footer style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: rhythm(2.5),
          fontSize: `3rem`,
          }}>
          <a href={social.github}>
            <i className="fab fa-github-square"></i>
          </a>
          <a href={social.linkedin}>
          <i className="fab fa-linkedin"></i>
          </a>
          <a href={social.email}>
            <i className="fas fa-at"></i>
          </a>
        </footer>*/}
      </div>
      <Image
          fixed={query.image1.childImageSharp.fixed}
          className={styles.introImage}
        />
    </div>
  )
}

export default IndexPart