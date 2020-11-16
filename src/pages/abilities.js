import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import abilitiesStyles from "../styles/abilities.module.scss"

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
                src
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
        </div>
        <h3>Languages</h3>
        <div className={abilitiesStyles.languages}>
          <div className={abilitiesStyles.lang}>
            <div class="flag show-on-scroll"></div>
            <h4>Albanian</h4>
            <p>- Fluent</p>
          </div>
          <div class="english lang ">
            <div class="flag "></div>
            <h4>English</h4>
            <p>- Fluent</p>
          </div>
        </div>
        <div class="italian lang">
          <div class="flag"></div>
          <h4>Italian</h4>
          <p>- Begginer</p>
        </div>
      </section>
    </Layout>
  )
}

export default Abilities
