import React from "react";
import { graphql } from "gatsby";
import Navbar from "./navbar";

import { rhythm, scale } from "../utils/typography"
import { root } from "postcss-selector-parser";

class Layout extends React.Component {
  render() { 
    //const { data } = this.props;
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog`
    console.log(location.pathname);
    console.log(title);
    console.log(children);
    let pageWidth = "";
    let header = "";

    if (location.pathname === rootPath ) {
        pageWidth = 48;
    } else {
        pageWidth = 25;
    }


    if (location.pathname === blogPath) {
        header = (
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            {title}
          </h1>
        )
      }

    console.log("pageWidth: " + pageWidth);
    console.log(`${__PATH_PREFIX__}`);

    const listItems = [
        { link: '/', name: "home" },      
        { link: '/about', name: "about" },
        { link: "/blog", name: "blog" },
        { link: "/projects", name: "projects" },
      ];
    return (
      <div>
        <Navbar headerProps={listItems} />
        <div style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(pageWidth),
          //padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}>
            <header>{header}</header>
            <main>{children}</main>
            <footer style={{ textAlign: `center`}}>
            {new Date().getFullYear()}, Built by <strong>Jan Paul Hoga</strong> with
            {` `}
            Gatsby & React
            </footer>
        </div>
      </div>
    )
  }
}

export default Layout
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`