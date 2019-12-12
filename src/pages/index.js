import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexIntro from "../components/index-introduction"
import IndexAbout from "../components/index-about"
import IndexProjects from "../components/index-projects"

class HomeIndex extends React.Component {
  render() {
    const { data } = this.props
    console.log(data);
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Jan Paul Hoga" />
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
