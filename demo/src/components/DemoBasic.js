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
  "noXlabel",
  "noYlabel",
  "onPointHover",
  "viewBoxHeight",
  "viewBoxWidth",
  "xLabelsStep",
  "yLabelsWidth",
]

const DemoBasic = () =>
  <div>
    <h2>
      {"Code"}
    </h2>
    <pre className="language-jsx">
      <code>
        {`
import ReactInteractiveComponent, {
  loadEditorTheme,
} from "react-interactive-component"

import YourComponent from "./src/yourComponent"

loadEditorTheme()

const Demo = () =>
  <ReactInteractiveComponent>
    <YourComponent data={[...]} />
  </ReactInteractiveComponent>
        `}
      </code>
    </pre>
    <h2>
      {"Result"}
    </h2>
    <ReactInteractiveComponent
      displayName="ReactSvgLineChart"
      hiddenProps={hiddenProps}
      tabsColor={variables.mainColor}
    >
      <ReactSvgLineChart data={data} className="customClass" />
    </ReactInteractiveComponent>
  </div>
export default DemoBasic
