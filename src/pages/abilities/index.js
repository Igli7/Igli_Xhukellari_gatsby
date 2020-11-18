import React from "react"
import Layout from "../../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import abilitiesStyles from "./abilities.module.scss"

const Abilities = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbilities(
        sort: { fields: programingLanguageLevel, order: DESC }
      ) {
        edges {
          node {
            programingLangauge
            programingLanguageLevel
            foreignLanguage
            foreignLanguageLevel
            flagImage {
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
      <section id={abilitiesStyles.abilities}>
        <h2>Abilities</h2>
        <h3>Skills</h3>
        <div className={abilitiesStyles.abilitiesWrapper}>
          <ul>
            {data.allContentfulAbilities.edges.map(edge => {
              if (edge.node.programingLangauge != null) {
                return (
                  <li class={abilitiesStyles.one}>
                    <p
                      class={abilitiesStyles.one}
                      style={{
                        left: edge.node.programingLanguageLevel + "%",
                      }}
                    >
                      {edge.node.programingLanguageLevel}%
                    </p>

                    <span className={abilitiesStyles.progLangName}>
                      {edge.node.programingLangauge}
                    </span>
                    <span
                      className={abilitiesStyles.percentage}
                      style={{
                        width: edge.node.programingLanguageLevel + "%",
                      }}
                    ></span>
                  </li>
                )
              } else {
                return null
              }
            })}
          </ul>
        
        <h3>Languages</h3>
        <div className={abilitiesStyles.languages}>
          {data.allContentfulAbilities.edges.map(edge => {
            if (edge.node.foreignLanguage != null) {
              return (
                <div className={abilitiesStyles.lang}>
                  <div class={abilitiesStyles.flag}>
                    <Img fluid={edge.node.flagImage.fluid}></Img>
                  </div>
                  <h4>{edge.node.foreignLanguage}</h4>
                  <p>- {edge.node.foreignLanguageLevel}</p>
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
        </div>
      </section>
    </Layout>
  )
}

export default Abilities
