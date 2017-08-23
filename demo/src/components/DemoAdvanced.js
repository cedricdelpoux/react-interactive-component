import React from "react"
import ReactSvgLineChart from "react-svg-line-chart"
import "react-svg-line-chart/lib/index.css"

import ReactInteractiveComponent, {
  Edit,
  Preview,
  Tab,
  Tabs,
  loadEditorTheme,
} from "../../../src"

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
]

const DemoAdvanced = () =>
  <div>
    <h2>
      {"Code"}
    </h2>
    <pre className="language-jsx">
      <code>
        {`
import ReactInteractiveComponent, {
  Edit,
  Preview,
  Tab,
  Tabs,
  loadEditorTheme,
} from "react-interactive-component"

import YourComponent from "./src/yourComponent"

loadEditorTheme()

const Demo = () =>
  <ReactInteractiveComponent component={<YourComponent data={[...]} />}>
    {(enhancedComponent, onChange) =>
      <div>
        <Tabs color="#2ecc71">
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
    `}
      </code>
    </pre>
    <h2>
      {"Result"}
    </h2>
    <ReactInteractiveComponent component={<ReactSvgLineChart data={data} />}>
      {(enhancedComponent, onChange) =>
        <div>
          <Tabs color="#2ecc71">
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
  </div>

export default DemoAdvanced
