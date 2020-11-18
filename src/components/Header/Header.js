import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeader {
        firstName
        lastName
        resume {
          file {
            fileName
            url
          }
        }
        backgroundImage {
          fluid(resizingBehavior: NO_CHANGE) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className={headerStyles.header}>
      <h1>
        {data.contentfulHeader.firstName}{" "}
        <span>{data.contentfulHeader.lastName}</span>
      </h1>
      <a
        href={data.contentfulHeader.resume.file.url}
        alt={data.contentfulHeader.resume.file.fileName}
        className={headerStyles.resume}
        target="_blank"
        rel="noreferrer"
      >
        My resume{" "}
        <FontAwesomeIcon
          className={headerStyles.icon}
          icon={faDownload}
          size="1x"
        />
      </a>
      <div className={headerStyles.imageContainer}>
        <Img
          className={headerStyles.bckImg}
          fluid={data.contentfulHeader.backgroundImage.fluid}
          alt=""
          draggable="false"
        />
        
      </div>
    </div>
  )
}

export default Header
