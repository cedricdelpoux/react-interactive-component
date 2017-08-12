import {mount, shallow} from "enzyme"
import React from "react"
import InputNumber from "./index"

const onChange = jest.fn()
const value = 10
const InputNumberFixture = <InputNumber onChange={onChange} value={value} />

describe("InputNumber", () => {
  it("renders", () => {
    mount(InputNumberFixture)
  })

  it("renders input[type=number]", () => {
    const inputCheckbox = shallow(InputNumberFixture)
    expect(inputCheckbox.type()).toBe("input")
    expect(inputCheckbox.props().type).toBe("number")
  })

  it("calls onChange when changed", () => {
    const inputCheckbox = shallow(InputNumberFixture)
    inputCheckbox.simulate("change", {
      target: {value: value, validity: {valid: true}},
    })
    expect(onChange).toHaveBeenCalled()
  })
})
