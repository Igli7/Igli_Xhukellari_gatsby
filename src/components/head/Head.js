import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  return (
    <Helmet title={`${title} | Igli Xhukellari`}>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" 
content="Here you can learn all about Igli Xhukellari, passion, pictures, jobs, and more" />
    </Helmet>
  )
}

export default Head
