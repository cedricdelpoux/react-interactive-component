import {mount, shallow} from "enzyme"
import React from "react"
import Tab from "./index"

const className = "tabClass"
const onClick = jest.fn()
const TabFixture = (
  <Tab label="TabLabel" className={className} onClick={onClick} />
)

describe("Tab", () => {
  it("renders", () => {
    mount(TabFixture)
  })

  it("gets className", () => {
    const tab = shallow(TabFixture)
    tab.hasClass(className)
  })

  it("calls onClick when Tab is clicked", () => {
    const tab = shallow(TabFixture)
    tab.simulate("click")
    expect(onClick).toHaveBeenCalled()
  })
})
