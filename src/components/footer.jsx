import React from "react"
import styled from "styled-components"
import Wrapper from "../theme/wrapper"

const FooterItem = styled.footer`
    width: 100%;
    display: block;
    padding: 10px 0;
    background-color: ${props => props.theme.verdunGreen};
    position: relative;
    color: ${props => props.theme.white};
`;

/**
 * Component for showing Footer.
 * This component require date prop
 *
 * @component
 * @example
 * const date = 20;
 * return (
 *   <Footer date={date} />
 * )
 */
const Footer = ({ date }) => (
    <FooterItem>
        <Wrapper>
            Todos los derechos reservados {date} &copy; Panadería Don Pablo S.A.C.
        </Wrapper>
    </FooterItem>
)

export default Footer