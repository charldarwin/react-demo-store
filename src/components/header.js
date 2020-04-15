import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Wrapper from "../theme/wrapper"
import logo from "../images/logo.png"
import Navigate from "./navigateBlock"

const HeaderItem = styled.header`
  background-color: ${props => props.theme.paleGreen};
  padding: 10px 0;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 5px;
    background-color: ${props => props.theme.limeade}
  }
`;

const LogoItem = styled.div`
  width: 15%;
  height: 100%;
  @media (max-width: 568px){
        width: 25%;
    }
`;

const NavigateItem = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 568px){
        width: 75%;
    }
`;

const CustomWrapp = {
  'align-items': 'center'
};

/**
 * Component for showing Header.
 * This component require siteTitle prop
 *
 * @component
 * @example
 * const siteTitle = "My App";
 * return (
 *   <Header siteTitle={siteTitle} />
 * )
 */
const Header = () => {

  return (
    <HeaderItem>
      <Wrapper css={CustomWrapp}>
        <LogoItem>
          <Link to="/">
            <img src={logo} alt="Logo Panadería Don Pablo" />
          </Link>
        </LogoItem>
        <NavigateItem>
          <Navigate />
        </NavigateItem>
      </Wrapper>
    </HeaderItem>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
