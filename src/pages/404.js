import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import PageContent from "../components/pageContent"

const detailsText = "La ruta a la que desea acceder, ha sido eliminada o no existe";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página no encontrada" />
    <Banner inside />
    <PageContent title="Error 404: Página no encontrada" details={detailsText} />
  </Layout>
)

export default NotFoundPage
