import {mount, shallow} from "enzyme"
import React from "react"
import Edit from "./index"
import InputText from "../controls/InputText"
import Control from "../Control"

const onChange = jest.fn()
const enhancedComponent = <InputText onChange={onChange} value="random text" />
const displayName = "Button"
const hiddenProps = []
const EditFixture = (
  <Edit
    hiddenProps={hiddenProps}
    enhancedComponent={enhancedComponent}
    onChange={onChange}
  />
)

describe("Edit", () => {
  it("renders", () => {
    mount(EditFixture)
  })

  it("calls onChange when Control is clicked", () => {
    const edit = shallow(EditFixture)
    edit.find(Control).first().simulate("change")
    expect(onChange).toHaveBeenCalled()
  })

  it("uses enhancedComponent.type.name", () => {
    const edit = shallow(EditFixture)
    expect(edit.html()).toContain(enhancedComponent.type.name)
  })

  it("uses displayName", () => {
    const edit = shallow(React.cloneElement(EditFixture, {displayName}))
    expect(edit.html()).toContain(displayName)
  })
})
