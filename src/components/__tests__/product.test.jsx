import React from "react"
import renderer from "react-test-renderer"
import Product from "../product"

describe("Testing Product component", () => {
    it("Renders", () => {
        const productItem = {
            "title": "Panes criollo",
            "imageSrc": "producto-1.jpg",
            "price": "44.00",
            "id": "1",
            "description": "Lorem ipsum description"
        }
        const tree = renderer
            .create(<Product data={productItem} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})