import React from "react"
import styled from "styled-components"

const ModalWrap = styled.div`
    position:fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        hegiht: 100%;
        background-color:${props => props.theme.black};
        opacity: .5;
    }
    `;

const BoxWrapper = styled.div`
    position: relative;
    width: 80%;
    max-width: 300px;
    box-shadow: 0 0 10px ${props => props.theme.gainsboro};
    background-color:${props => props.theme.white};
    padding: 30px;
`;

const Message = styled.p`
    color: ${props => props.theme.grey};
`;

/**
 * Component to notify user when add product to shopping cart.
 * This component request title and image of product.
 * This component require action button in parent component to generate alert effect
 *
 * @component
 * @example
 * const title="Product 1";
 * const image=<ImageComponent></ImageComponent>;
 * return (
 *   <ProductAlert title={title} image={image} />
 * )
 */
const ProductAlert = ({ title, image }) => (
    <ModalWrap>
        <BoxWrapper>
            <Message>El producto <strong>"{title}"</strong> ha sido añadido a su carrito de compras.</Message>
            {image}
        </BoxWrapper>
    </ModalWrap >
)

export default ProductAlert
