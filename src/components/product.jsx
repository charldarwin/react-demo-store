import React, { useState } from "react"
import styled from "styled-components"
import cartIcon from "../images/shopping-cart.svg"
import ProductAlert from "./productAlert"


const ProductItem = styled.div`
    margin: 3%;
    width: 25%;
    min-width: 250px;
    padding: 10px 10px 15px 10px;
    box-shadow: 0 0 10px ${props => props.theme.gainsboro};
    border-radius: 5px;
    background-color: ${props => props.theme.white};
    flex-grow: 1;
`;

const ProductTitle = styled.h4`
    font-size: 1.125em;
    margin: 15px 5px 0;
    color: ${props => props.theme.black};
    `;

const ProductDetails = styled.div`
    font-size: 1em;
    color: ${props => props.theme.grey};
    margin: 5px 5px 15px;
    `;

const ProductCost = styled.div`
    font-size: 1.5em;
    display: inline-block;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 4px;
    color: ${props => props.theme.black};
    .quantity{
        font-size: .75em;
        margin-left: 5px;
    }
    `;

const CartButton = styled.button`
    font-size: 1.5em;
    display: flex;
    float: right;
    font-size: .875em;
    margin-right: 5px;
    background-color: ${props => props.theme.verdunGreen};
    color: ${props => props.theme.white};
    padding: 5px 20px 5px 50px;
    align-items: center;
    border: none;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    transition: .35s;
    text-transform: uppercase;
    .icon{
        width: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: ${props => props.theme.paleGreen};
        border-right: 1px solid ${props => props.theme.verdunGreen};
        position absolute;
        top: 0;
        left: 0;
        bottom: 0;
        border-radius: 4px 0 0 4px;
    }
    img{
        width: 20px;
        margin-right: 5px;
    }
    &:hover{
        color: ${props => props.theme.black};
        background-color: ${props => props.theme.paleGreen};
    }
`;

const Products = ({ data }) => {

    const [showAlert, setShowAlert] = useState(false);

    const ImageItem = styled.div`
    width: 100%;
    background-image: url(static/products/${data.imageSrc});
    padding-bottom: 78%;
    background-color: red;
    background-position: center;
    background-size: cover;
    `;

    return (
        <ProductItem>
            <ImageItem></ImageItem>
            <ProductTitle>{data.title}</ProductTitle>
            {
                data.description ? <ProductDetails>{data.description}</ProductDetails> : ''
            }
            <ProductCost>
                <span>$ {data.price}</span>
                <span className="quantity">Kg</span>
            </ProductCost>
            <CartButton
                onClick={
                    () => {
                        if (!showAlert) {
                            setShowAlert(true)
                            setTimeout(() => {
                                setShowAlert(false)
                            }, 3000);
                        } else {
                            setShowAlert(false)
                        }
                    }
                }
                data-price={data.price}
                data-id={data.id}>
                <span className="icon">
                    <img src={cartIcon} alt="ícono carrito" />
                </span>
                <span>Añadir</span>
            </CartButton>
            {
                showAlert ? <ProductAlert title={data.title} image={<ImageItem></ImageItem>} /> : ''
            }
        </ProductItem>
    )
}

export default Products
