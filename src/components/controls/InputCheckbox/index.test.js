import {mount, shallow} from "enzyme"
import React from "react"
import InputCheckbox from "./index"

const onChange = jest.fn()
const value = false
const InputCheckboxFixture = <InputCheckbox onChange={onChange} value={value} />

describe("InputCheckbox", () => {
  it("renders", () => {
    mount(InputCheckboxFixture)
  })

  it("renders input[type=checkbox]", () => {
    const inputCheckbox = shallow(InputCheckboxFixture)
    expect(inputCheckbox.type()).toBe("input")
    expect(inputCheckbox.props().type).toBe("checkbox")
  })

  it("calls onChange when clicked", () => {
    const inputCheckbox = shallow(InputCheckboxFixture)
    inputCheckbox.simulate("click", {
      target: {checked: !value, validity: {valid: true}},
    })
    expect(onChange).toHaveBeenCalled()
  })
})
