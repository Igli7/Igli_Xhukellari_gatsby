import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Img from "gatsby-image"
import projectStyles from "./project.module.scss"
import cn from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Head from "../components/head/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      projectName
      publishedDate(formatString: "MMMM Do, YYYY")
      gitHubRepoLink
      aboutTheProject
      visitWebsite
      projectImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <Head title={props.data.contentfulProjects.projectName} />
      <div className={projectStyles.project}>
        <div className={projectStyles.projectWrapper}>
          <h1>{props.data.contentfulProjects.projectName}</h1>

          <p className={projectStyles.date}>
            <strong>Published: </strong>{" "}
            {props.data.contentfulProjects.publishedDate}
          </p>
          <div className={projectStyles.projectImage}>
            <div className={projectStyles.imageWrapper}>
              <Img
                fluid={props.data.contentfulProjects.projectImage.fluid}
                className={projectStyles.image}
              ></Img>
            </div>
          </div>
          <p className={projectStyles.description}>
            {props.data.contentfulProjects.aboutTheProject}
          </p>

          <div class={projectStyles.buttons}>
            <a
              className={cn(projectStyles.button, projectStyles.github1)}
              href={props.data.contentfulProjects.gitHubRepoLink}
              target="_blank"
              rel="noreferrer"
            >
              <div class={projectStyles.icon}>
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </div>
              <p>GitHub</p>
            </a>
            <a
              className={cn(projectStyles.button, projectStyles.netlify)}
              href={props.data.contentfulProjects.visitWebsite}
              target="_blank"
              rel="noreferrer"
            >
              <div class={projectStyles.icon}>
                <FontAwesomeIcon icon={faEye} size="1x" />
              </div>
              <p>Visit</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
