import React from "react"
import projectsStyles from "./projects.module.scss"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/Layout/Layout"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            projectName
            slug
            projectImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={projectsStyles.project}>
        <h2>Projects</h2>
        <div className={projectsStyles.projectWrapper}>
          <div className={projectsStyles.cardContainer}>
            {data.allContentfulProjects.edges.map(edge => {
              return (
                <div className={projectsStyles.card}>
                  <div className={projectsStyles.cardContent}>
                    <h4 className={projectsStyles.cardTitle}>
                      {edge.node.projectName}
                    </h4>
                    <div className={projectsStyles.cardImage}>
                      <Img
                        className={projectsStyles.image}
                        fluid={edge.node.projectImage.fluid}
                      ></Img>
                    </div>
                    <Link to={`/projects/${edge.node.slug}`}>Learn More</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
