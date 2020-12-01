import React from "react"
import Header from "../components/Header/Header"
import Profile from "../components/Profile/Profile"
import Layout from "../components/Layout/Layout"
import Head from "../components/head/Head"

import "../styles/index.scss"

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Header />
      <Profile />
    </Layout>
  )
}

export default Index
