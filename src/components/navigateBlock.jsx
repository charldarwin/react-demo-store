import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavItem = styled.nav`
    display:flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    color: ${ props => props.theme.verdunGreen};
    @media (max-width: 568px){
        font-size: .875em;
    }
    & a{
        &:before{
            content:'';
            width: 0;
            height: 1px;
            transition: .35s;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            background-color: ${props => props.theme.verdunGreen}
        }
        &:hover{
            &:before{
                width: calc(100% - 20px);
            }
        }
        &:after{
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 2px;
            height: 60%;
            margin: auto;
            background-color: ${props => props.theme.verdunGreen}
        }
        &:last-child{
    &:after{
      display: none;
    }
  }
    }
`;

const LinkItem = {
    'text-decoration': 'none',
    'text-transform': 'uppercase',
    'color': 'inherit',
    'padding': '1px 10px',
    'position': 'relative'
}

/**
 * Component for showing Navigation.
 * This component doesn't require any prop
 *
 * @component
 * @example
 * return (
 *   <NavigateBlock />
 * )
 */
const NavigateBlock = () => (
    <NavItem>
        <Link css={LinkItem} to="/">Inicio</Link>
        <Link css={LinkItem} to="/nosotros/">Nosotros</Link>
    </NavItem>
)
export default NavigateBlock