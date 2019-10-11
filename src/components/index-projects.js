import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./indexpart.module.scss";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography"

const IndexPart = (props) => {
  const posts = props
  const query = useStaticQuery(graphql`
    fragment squareImage3 on File {
        childImageSharp {
          fixed(width: 1000, height: 800) {
            src
            originalName
          }
        }
    }, 
    query {
        image3: file(relativePath: { eq: "undraw_to_the_moon_v1mv.png" }) {
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
        marginBottom: rhythm(2),
      }}
    >
     <div className={styles.projectsContainer}>
       <Link style={{ boxShadow: `none` }} to='/projects'>
         <header className={styles.projectsTitle}>
           Projects
         </header>
       </Link>  
       <main className={styles.projectsContent}>
       
        {posts.node.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return ( 
                      <div
                        key={node.fields.slug}
                        style={{
                          marginLeft: `1rem`
                        }}>
                        <h4
                          style={{
                            marginBottom: rhythm(1 / 4)
                          }}
                        >
                          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </h4>
                        <small>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </small>
                      </div>
                  )
                })}
       
       </main>
     </div>

      <Image
        fixed={query.image3.childImageSharp.fixed}
        className={styles.projectImage}
      />
    </div>
  )
}

export default IndexPart