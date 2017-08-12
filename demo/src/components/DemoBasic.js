import React from "react"
import ReactSvgLineChart from "react-svg-line-chart"
import "react-svg-line-chart/lib/index.css"

import ReactInteractiveComponent, {loadEditorTheme} from "../../../src"
import * as variables from "../variables.js"

loadEditorTheme()

const data = []

for (let x = 1; x <= 30; x++) {
  data.push({x: x, y: Math.floor(Math.random() * 100)})
}

const hiddenProps = [
  "activePoint",
  "data",
  "hoveredPointRadius",
  "onPointHover",
  "viewBoxHeight",
  "viewBoxWidth",
  "xLabelsStep",
  "yLabelsWidth",
  "noYlabel",
  "noXlabel",
]

const DemoBasic = () =>
  <ReactInteractiveComponent
    displayName="ReactSvgLineChart"
    hiddenProps={hiddenProps}
    tabsColor={variables.mainColor}
  >
    <ReactSvgLineChart data={data} className="customClass" />
  </ReactInteractiveComponent>

export default DemoBasic
