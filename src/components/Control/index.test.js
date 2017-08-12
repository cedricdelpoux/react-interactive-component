import {mount, shallow} from "enzyme"
import React from "react"
import Control from "./index"
import InputCheckbox from "../controls/InputCheckbox"
import InputNumber from "../controls/InputNumber"
import InputText from "../controls/InputText"

const controlBooleanOnChange = jest.fn()
const controlBooleanValue = false
const controlBooleanStyle = {background: "green", color: "white"}
const controlBooleanClassName = "controlClass"
const controlBooleanFixture = (
  <Control
    name={"boolean"}
    value={controlBooleanValue}
    onChange={controlBooleanOnChange}
    styles={{boolean: controlBooleanStyle}}
    classNames={{boolean: controlBooleanClassName}}
  />
)

const controlNumberOnChange = jest.fn()
const controlNumberFixture = (
  <Control name={"number"} value={10} onChange={controlNumberOnChange} />
)

const controlStringOnChange = jest.fn()
const controlStringFixture = (
  <Control name={"string"} value="hello" onChange={controlStringOnChange} />
)

const controlFunctionOnChange = jest.fn()
const controlFunctionFixture = (
  <Control
    name={"string"}
    value={() => {}}
    onChange={controlFunctionOnChange}
  />
)

describe("Control", () => {
  it("renders boolean control", () => {
    mount(controlBooleanFixture)
  })

  it("renders number control", () => {
    mount(controlNumberFixture)
  })

  it("renders string control", () => {
    mount(controlStringFixture)
  })

  it("renders null control", () => {
    mount(controlFunctionFixture)
  })

  it("contains InputText component", () => {
    const control = shallow(controlStringFixture)
    expect(control.containsMatchingElement(InputText)).toBe(true)
  })

  it("contains InputNumber component", () => {
    const control = shallow(controlNumberFixture)
    expect(control.containsMatchingElement(InputNumber)).toBe(true)
  })

  it("contains InputCheckbox component", () => {
    const control = shallow(controlBooleanFixture)
    expect(control.containsMatchingElement(InputCheckbox)).toBe(true)
  })

  it("calls onChange when control boolean change", () => {
    const control = shallow(controlBooleanFixture)
    control.find(InputCheckbox).first().simulate("change")
    expect(controlBooleanOnChange).toHaveBeenCalled()
  })

  it("calls onChange when control number change", () => {
    const control = shallow(controlNumberFixture)
    control.find(InputNumber).first().simulate("change")
    expect(controlNumberOnChange).toHaveBeenCalled()
  })

  it("calls onChange when control text change", () => {
    const control = shallow(controlStringFixture)
    control.find(InputText).first().simulate("change")
    expect(controlStringOnChange).toHaveBeenCalled()
  })

  it("gets style", () => {
    const control = shallow(controlBooleanFixture)
    expect(control.instance().getStyle()).toBe(controlBooleanStyle)
    expect(control.instance().renderControl().props).toHaveProperty(
      "style",
      controlBooleanStyle
    )
  })

  it("gets className", () => {
    const control = shallow(controlBooleanFixture)
    expect(control.instance().getClassName()).toBe(controlBooleanClassName)
    expect(control.instance().renderControl().props).toHaveProperty(
      "className",
      controlBooleanClassName
    )
    control.find(InputCheckbox).hasClass(controlBooleanClassName)
  })
})
