import React, { Fragment } from "react"
import footerStyles from "./footer.module.scss"
import { useLocation } from "@reach/router"

const Footer = () => {
  let location = useLocation()

  console.log(location.pathname)

  return (
    <Fragment>
      {location.pathname === "/abilities" ||
      location.pathname === "/experience" ? (
        <footer
          className={footerStyles.footer}
          style={{ backgroundColor: "#ebebeb" }}
        >
          <div style={{ color: "#2B303A" }}>
            <p>&copy; 2020 All Rights Reserved.</p>-<h3>Igli Xhukellari</h3>
          </div>
        </footer>
      ) : (
        <footer className={footerStyles.footer}>
          <div>
            <p>&copy; 2020 All Rights Reserved.</p>-<h3>Igli Xhukellari</h3>
          </div>
        </footer>
      )}
    </Fragment>
  )
}

export default Footer
