import {mount, shallow} from "enzyme"
import React from "react"
import InputText from "./index"

const onChange = jest.fn()
const value = "Text"
const InputTextFixture = <InputText onChange={onChange} value={value} />

describe("InputText", () => {
  it("renders", () => {
    mount(InputTextFixture)
  })

  it("renders input[type=text]", () => {
    const inputCheckbox = shallow(InputTextFixture)
    expect(inputCheckbox.type()).toBe("input")
    expect(inputCheckbox.props().type).toBe("text")
  })

  it("calls onChange when changed", () => {
    const inputCheckbox = shallow(InputTextFixture)
    inputCheckbox.simulate("change", {
      target: {value: value, validity: {valid: true}},
    })
    expect(onChange).toHaveBeenCalled()
  })
})
