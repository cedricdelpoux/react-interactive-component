import {mount, shallow} from "enzyme"
import React from "react"
import Tabs from "./index"
import Tab from "../Tab"

const onTab1Click = jest.fn()
const onTab2Click = jest.fn()
const TabsFixtures = (
  <Tabs color="yellow">
    <Tab color="green" onClick={onTab1Click} />
    <Tab onClick={onTab2Click} />
  </Tabs>
)

describe("Tabs", () => {
  it("renders", () => {
    mount(TabsFixtures)
  })

  it("has two childs", () => {
    const tabs = shallow(TabsFixtures)
    expect(tabs.find(Tab)).toHaveLength(2)
  })

  it("changes activeTabIndex state", () => {
    const tabs = shallow(TabsFixtures)
    expect(tabs.state().activeTabIndex).toBe(0)
    tabs.find(Tab).last().simulate("click")
    expect(tabs.state().activeTabIndex).toBe(1)
    expect(onTab2Click).toHaveBeenCalled()
  })

  it("calls onClick when Tab is clicked", () => {
    const tabs = shallow(TabsFixtures)
    tabs.find(Tab).first().simulate("click")
    expect(onTab1Click).toHaveBeenCalled()
  })
})
