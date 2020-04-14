import React from "react"
import styled from "styled-components"
import Wrapper from "../theme/wrapper"
import PageTitle from "./pageTitle"

const PageSect = styled.section`
    background-color: ${props => props.theme.whiteSmoke};
    width: 100%;
    padding: 50px 0;
    min-height: calc(100vh - 450px);
    @media (max-width: 1370px){
        min-height: calc(100vh - 350px);
    }
    @media (max-width: 1370px){
        min-height: calc(100vh - 300px);
    }
    @media (max-width: 568px){
        padding: 40px 0;
    }
`;

const TextContent = styled.div`
    margin: 10px;
    text-align: justify;
`;

const PageContent = ({ title, details, repeatDetails }) => (
    <PageSect>
        <Wrapper>
            <PageTitle title={title} />
            {
                repeatDetails ?
                    <>
                        <TextContent>{details}</TextContent>
                        <TextContent>{details}</TextContent>
                        <TextContent>{details}</TextContent>
                        <TextContent>{details}</TextContent>
                    </>
                    : <TextContent>{details}</TextContent>
            }
        </Wrapper>
    </PageSect>
)

export default PageContent
