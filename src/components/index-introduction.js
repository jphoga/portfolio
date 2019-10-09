import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";

import { rhythm, scale } from "../utils/typography"

const IndexPart = (props) => {
  const query = useStaticQuery(graphql` 
    fragment squareImage1 on File {
      childImageSharp {
        fixed(width: 800, height: 650) {
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
        <ul style={{
          display: `flex`,
          justifyContent: `center`,
          marginBottom: rhythm(2.5),
          fontSize: `2.5rem`,
          }}>
          {Object.keys(social).map((keyName, i) => (
              <a style={{ boxShadow: `none`, margin: `0.5rem`, color: '#4285f4' }} target="_blank" href={social[keyName].link}>
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