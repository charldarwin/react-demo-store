import React from "react"
import renderer from "react-test-renderer"
import PageContent from "../pageContent"

describe("PageContent component", () => {
    it("Renders", () => {
        const tree = renderer
            .create(<PageContent title="Simple page" details="Lorem content for simple sample page" />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})