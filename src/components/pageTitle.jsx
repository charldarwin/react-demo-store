import React from "react"
import styled from "styled-components"

const TitleItem = styled.h2`
    color: ${props => props.theme.verdunGreen};
    font-size: 2.25em;
    margin: 0 0 30px;
    padding: 0;
    text-transform: uppercase;
    text-align:center;
    display: block;
    width: 100%;
    @media (max-width: 968px){
        font-size: 2em;
    }
    @media (max-width: 568px){
        font-size: 1.75em;
    }
`;
const PageTitle = ({ title }) => (
    <TitleItem>{title}</TitleItem>
)

export default PageTitle
