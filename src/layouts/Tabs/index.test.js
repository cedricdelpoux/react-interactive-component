import {mount} from "enzyme"
import React from "react"
import LayoutTabs from "./index"

const enhancedComponent = <input type="button" />
const LayoutTabsFixture = (
  <LayoutTabs onChange={() => {}} enhancedComponent={enhancedComponent} />
)

describe("LayoutTabs", () => {
  it("renders", () => {
    mount(LayoutTabsFixture)
  })
})
