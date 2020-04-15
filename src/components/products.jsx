import React from "react"
import styled from "styled-components"
import Wrapper from "../theme/wrapper"
import PageTitle from "./pageTitle"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./product"

const ProductsSect = styled.section`
    background-color: ${props => props.theme.whiteSmoke};
    width: 100%;
    padding: 50px 0;
    @media (max-width: 568px){
        padding: 40px 0;
    }
`;

const ProductsList = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`;


/**
 * Component for showing list of products.
 * This component request graphQL request to get data
 * This component doesn't require any prop
 *
 * @component
 * @example
 * return (
 *   <Products />
 * )
 */
const Products = () => {

    const products = useStaticQuery(graphql`
    query MyQuery {
  productsJson {
    data {
      id
      price
      title
      description
      imageSrc
    }
  }
}
  `)

    const productsData = products.productsJson.data

    return (
        <ProductsSect>
            <Wrapper>
                <PageTitle title="Nuestros productos" />
                <ProductsList>
                    {
                        productsData.map((item, index) => {
                            return (
                                <Product key={index} data={item} />
                            )
                        })
                    }
                </ProductsList>
            </Wrapper>
        </ProductsSect>
    )
}

export default Products
