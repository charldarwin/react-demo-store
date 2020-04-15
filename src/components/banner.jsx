import React from "react"
import styled from "styled-components"
import Wrapper from "../theme/wrapper"
import banner from "../images/banner.jpg"

const BannerItem = styled.div`
    width: 100%;
    padding-bottom: 30%;
    display: block;
    background-image: url(${banner});
    background-size: cover;
    position: relative;
    background-position: center;
    @media (max-width: 767px){
        padding-bottom: 50%;
    }
    @media (max-width: 568px){
        padding-bottom: 70%;
    }
    &:before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.theme.black};
        opacity: .5;
    }
    &.inside{
        padding-bottom: 15%;
        @media (max-width: 767px){
        padding-bottom: 20%;
    }
    @media (max-width: 568px){
        padding-bottom: 30%;
    }
    }
`;

const BannerTitle = styled.div`
    position: absolute;
    bottom: 26%;
    left: 10%;
    @media (max-width: 968px){
        font-size: .875em;
    }
    @media (max-width: 767px){
        font-size: .625em;
    }
    @media (max-width: 568px){
        font-size: .5em;
    }
`;

const BannerH2 = styled.h2`
    position: relative;
    color: ${props => props.theme.white};
    margin: 0;
    font-size: 3.5em;
    text-transform: uppercase;
    `;
const BannerH3 = styled.h3`
    position: relative;
    color: ${props => props.theme.paleGreen};
    margin: 10px 0 0;
    font-size: 2.5em;
`;

/**
 * Component for showing banner in frontpage or internal Pages based on inside prop
 *
 * @component
 * @example
 * const inside; // To show small Banner for internal pages
 * return (
 *   <Banner inside />
 * )
 */
const Banner = ({ inside }) => {
    return (
        <BannerItem className={inside ? 'inside' : ''}>
            <Wrapper>
                {
                    !inside ?
                        <BannerTitle>
                            <BannerH2>Haz tu pedido ahora</BannerH2>
                            <BannerH3>envíos a toda la ciudad</BannerH3>
                        </BannerTitle>
                        : ''
                }
            </Wrapper>
        </BannerItem>
    )
}

export default Banner