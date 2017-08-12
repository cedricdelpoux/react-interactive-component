import {mount} from "enzyme"
import React from "react"
import Preview from "./index"

const enhancedComponent = <input type="button" />
const hiddenProps = []
const PreviewFixture = (
  <Preview
    displayName="ReactSvgLineChart"
    hiddenProps={hiddenProps}
    enhancedComponent={enhancedComponent}
  />
)

describe("Preview", () => {
  it("renders", () => {
    mount(PreviewFixture)
  })
})
