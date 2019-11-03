import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class AboutPage extends React.Component {
  render() {
    const aboutme = this.props.data.markdownRemark

    return (
      <Layout location={this.props.location} title='About me'>
        <SEO
          title='About me'
          description='Some infos about me and my life in Japan'
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {aboutme.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(- 1 / 5),
                marginTop: `8px`,
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              ...a small history of my coding life...
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: aboutme.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            
            <li>
              
                <Link to='/' rel="next">
                  ← home
                </Link>
              
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: "/about/about_me/" } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`