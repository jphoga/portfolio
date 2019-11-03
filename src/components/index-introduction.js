import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import styles from "./indexpart.module.scss";

import BackgroundImage from 'gatsby-background-image'

const IndexPart = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "tokyo-air.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e19`}
          style={{
            display: `flex`,
            flexWrap: 'wrap',
            justifyContent: `left`,
            color: `white`,
            height: `900px`,
            //width: '109%',
            //marginLeft: '-5%'
            //position: 'inherit',
            //marginBottom: '40%',
            //zIndex: 99,
            margin: '0 -40px 0 -40px',
          }}
        >
          <header 
            style={{
              width:`80%`,
              marginLeft: '3rem',
            }}>
            <h1>Hi, my name is Jan.</h1>
            <h2 className={styles.lowerMargin}>I am a Consultant and Full-Stack Programmer.</h2>
          </header>
        </BackgroundImage>
      )
    }}
  />
)


export default IndexPart