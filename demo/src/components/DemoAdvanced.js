import React from "react"
import ReactSvgLineChart from "react-svg-line-chart"
import "react-svg-line-chart/lib/index.css"

import * as variables from "../variables.js"
import ReactInteractiveComponent, {
  Edit,
  Preview,
  Tab,
  Tabs,
  loadEditorTheme,
} from "../../../src"

loadEditorTheme("duotone-sea")

const data = []

for (let x = 1; x <= 30; x++) {
  data.push({x: x, y: Math.floor(Math.random() * 100)})
}

const hiddenProps = [
  "activePoint",
  "data",
  "hoveredPointRadius",
  "onPointHover",
]

const DemoAdvanced = () =>
  <ReactInteractiveComponent
    component={<ReactSvgLineChart data={data} />}
    displayName="ReactSvgLineChart"
    hiddenProps={hiddenProps}
    tabsColor="orange"
  >
    {(enhancedComponent, onChange) =>
      <div>
        <Tabs color={variables.mainColor}>
          <Tab label="Preview">
            <Preview
              displayName="ReactSvgLineChart"
              hiddenProps={hiddenProps}
              enhancedComponent={enhancedComponent}
            />
          </Tab>
          <Tab label="Edit">
            <Edit
              displayName="ReactSvgLineChart"
              hiddenProps={hiddenProps}
              enhancedComponent={enhancedComponent}
              onChange={onChange}
            />
          </Tab>
        </Tabs>
        {enhancedComponent}
      </div>}
  </ReactInteractiveComponent>

export default DemoAdvanced
