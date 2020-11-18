import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      projectName
      publishedDate(formatString: "MMMM Do, YYYY")
      gitHubRepoLink
      aboutTheProject
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulProjects.projectName}</h1>
      <p>Published: {props.data.contentfulProjects.publishedDate}</p>
      <p>Description: {props.data.contentfulProjects.aboutTheProject}</p>
      <a
        href={props.data.contentfulProjects.gitHubRepoLink}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Visit GitHub Repo
      </a>
    </Layout>
  )
}

export default Project
