import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import navbarStyles from "./navbar.module.scss"
import Img from "gatsby-image"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulNavbar {
        logo {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className={navbarStyles.navbarContainer}>
      <nav>
        <Link
          class={navbarStyles.logo}
          to="/"
          style={{ minHeight: "63px", minWidth: "70px", fontSize: "0.1px" }}
        >
          <Img fluid={data.contentfulNavbar.logo.fluid}></Img>Logo
        </Link>
        <div class={navbarStyles.menuWrap}>
          <input type="checkbox" class={navbarStyles.toggler} id="toggler" />
          <label
            htmlFor="toggler"
            style={{ position: "absolute", fontSize: "0.1px" }}
          >
            Menu
          </label>
          <div class={navbarStyles.hamburger}>
            <div></div>
          </div>

          <div class={navbarStyles.menu}>
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="/" activeClassName={navbarStyles.activeNavLink}>
                      <p>Profile</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/experience"
                      activeClassName={navbarStyles.activeNavLink}
                    >
                      <p>Experience</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      activeClassName={navbarStyles.activeNavLink}
                    >
                      <p>Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/abilities"
                      activeClassName={navbarStyles.activeNavLink}
                    >
                      <p>Abilities</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      activeClassName={navbarStyles.activeNavLink}
                    >
                      <p>Contact</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
