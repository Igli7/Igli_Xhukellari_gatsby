import React from "react"
import Layout from "../../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import experienceStyles from "./experience.module.scss"
import Head from "../../components/head/Head"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulExperience(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            instituteName
            instituteLink
            linkDescription
            description {
              description
            }
            additionalDescription
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title='Experience' />
      <section id={experienceStyles.experience}>
        <div class={experienceStyles.wa1}>
          <h2>Experience</h2>
          <div class={experienceStyles.timeline}>
            {data.allContentfulExperience.edges.map(edge => {
              return (
                <ul>
                  <span class={experienceStyles.blueLine}></span>
                  <li class={experienceStyles.one}>
                    <div class={experienceStyles.content}>
                      <div class={experienceStyles.institute}>
                        {edge.node.instituteName}
                      </div>
                      <div class={experienceStyles.program}>
                        <a
                          href={edge.node.instituteLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {edge.node.linkDescription}
                        </a>
                      </div>
                      <div class={experienceStyles.describe}>
                        {edge.node.description.description}
                      </div>
                      {edge.node.additionalDescription && (
                        <div className={experienceStyles.gpa}>
                          {edge.node.additionalDescription}
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Experience
