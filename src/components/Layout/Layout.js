import React from "react"
import Navbar from "../Navbar/NavBar"
import Footer from "../Footer/Footer"

import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Navbar />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
