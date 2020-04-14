import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Products from "../components/products"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Panadería Don Pablo" />
      <Banner />
      <Products />
    </Layout>
  )

}

export default IndexPage
