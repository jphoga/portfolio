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
        image3: file(relativePath: { eq: "undraw_post_online_dkuk.png" }) {
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
       <ul>
        {posts.node.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <article key={node.fields.slug}>
                      <header>
                        <h3
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                          </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </section>
                    </article>
                  )
                })}
       </ul>
       </main>
     </div>

      <Image
        fixed={query.image3.childImageSharp.fixed}
        style={{
          marginLeft: rhythm(1 / 4),
          marginBottom: 0,
          width: '24rem',
          height: '24rem',
        }}
        imgStyle={{
          //borderRadius: `50%`,
        }}
      />
    </div>
  )
}

export default IndexPart