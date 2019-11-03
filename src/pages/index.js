import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import IndexIntro from "../components/index-introduction"
import IndexAbout from "../components/index-about"
import IndexProjects from "../components/index-projects"
import IndexBlog from "../components/index-blog"

class HomeIndex extends React.Component {
  render() {
    const { data } = this.props
    console.log(data);
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        <IndexIntro></IndexIntro>
        <IndexAbout></IndexAbout>
        <IndexProjects node={posts}></IndexProjects>
        

      </Layout>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
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
