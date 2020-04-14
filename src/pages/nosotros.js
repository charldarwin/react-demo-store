import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import PageContent from "../components/pageContent"

const detailsText = "Maecenas pellentesque aliquam ultrices. Nullam gravida, sem nec pulvinar sodales, lorem magna suscipit tellus, pellentesque condimentum ligula elit eu mauris. Proin ultricies ut nunc ut commodo. Duis id ullamcorper turpis. Etiam aliquet eget erat a sollicitudin. Cras placerat justo vitae est pretium vehicula. Proin ultricies ut nunc ut commodo. Duis id ullamcorper turpis. Etiam aliquet eget erat a sollicitudin. Cras placerat justo vitae est pretium vehicula. Proin ultricies ut nunc ut commodo. Duis id ullamcorper turpis. Etiam aliquet eget erat a sollicitudin. Cras placerat justo vitae est pretium vehicula.";

const AboutusPage = () => (
  <Layout>
    <SEO title="Nosotros" />
    <Banner inside />
    <PageContent title="Acerca de Nosotros" details={detailsText} repeatDetails />
  </Layout>
)

export default AboutusPage
