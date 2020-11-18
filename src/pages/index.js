import React from "react"
import Header from "../components/Header/Header"
import Profile from "../components/Profile/Profile"
import Layout from "../components/Layout/Layout"

import "../styles/index.scss"

const Index = () => {
  return (
    <Layout>
      <Header />
      <Profile />
    </Layout>
  )
}

export default Index
