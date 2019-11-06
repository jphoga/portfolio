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
            margin: '0 -60px 0 -60px',
           }}
        >
          <header 
            style={{
              width:`80%`,
              marginLeft: '3rem',
            }}>
            <h1 style={{fontSize: '48px'}}>Hi, my name is Jan.</h1>
            <h2 className={styles.lowerMargin}>I am a Full-Stack Programmer and Consultant.</h2>
          </header>
        </BackgroundImage>
      )
    }}
  />
)


export default IndexPart