import React from "react"
import "react-svg-line-chart/lib/index.css"

import DemoBasic from "./components/DemoBasic"
import DemoAdvanced from "./components/DemoAdvanced"
import readmeHtml from "../../README.md"

const routes = [
  {
    path: "/",
    exact: true,
    component: <DemoBasic />,
    label: "Basic example",
  },
  {
    path: "/advanced",
    component: <DemoAdvanced />,
    label: "Advanced example",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
