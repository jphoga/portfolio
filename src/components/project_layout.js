import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class BlogLayout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const blogPath = `${__PATH_PREFIX__}/blog`
    let header

    if (location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `4185F4`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `4185F4`,
            }}
            to={`/projects`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{ textAlign: `center`, marginTop: `10%`, marginBottom: `4%`}}>
          {new Date().getFullYear()}, Built by <strong>Jan Paul Hoga</strong>
        </footer>
      </div>
    )
  }
}

export default BlogLayout
