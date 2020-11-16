import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <div className={navbarStyles.navbarContainer}>
      <nav>
        <Link class={navbarStyles.logo} to='/'></Link>
        <div class={navbarStyles.menuWrap}>
          <input type="checkbox" class={navbarStyles.toggler} id="toggler" />
          <div class={navbarStyles.hamburger}>
            <div></div>
          </div>

          <div class={navbarStyles.menu}>
            <div>
              <div>
                <ul>
                  
                  <li>
                    <Link to="/" id="click2" activeClassName={navbarStyles.activeNavLink}>
                      <p>Profile</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/experience" id="click3" activeClassName={navbarStyles.activeNavLink}>
                      <p>Experience</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/projects" id="click4" activeClassName={navbarStyles.activeNavLink}>
                      <p>Projects</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/abilities" id="click5" activeClassName={navbarStyles.activeNavLink}>
                      <p>Abilities</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" class="aContact" id="click6" activeClassName={navbarStyles.activeNavLink}>
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
