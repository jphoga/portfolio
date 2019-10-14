import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class AboutPage extends React.Component {
  render() {
    
    return (
      <Layout location={this.props.location} title='About me'>
        <SEO
          title='About me'
          description='Some infos about me'
        />
        <article>
          <header>
            <p
              style={{
                ...scale(1/ 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              Some info about me and my life in Japan.
            </p>
          </header>
          <section >
          <p>Test</p>
          </section>
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

export const aboutQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}
`
