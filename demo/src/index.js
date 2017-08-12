import React from "react"
import ReactDOM from "react-dom"
import * as variables from "./variables.js"
import styled, {injectGlobal} from "styled-components"

import Footer from "./components/Footer"
import Header from "./components/Header"
import DemoBasic from "./components/DemoBasic"

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #606c71;
  }

  pre[class*="language-"] {
    box-shadow: none;
    border: none;
    border-radius: 0;
  }
`

const Container = styled.div`
  ${variables.large} {
    max-width: 64rem;
    padding: 0 6rem;
    margin: 0 auto;
    font-size: 1.1rem;
  }

  ${variables.medium} {
    padding: 0 4rem;
    font-size: 1.1rem;
  }

  ${variables.small} {
    padding: 0 1rem;
    font-size: 1rem;
  }
`

const App = () =>
  <div>
    <Header title="React Interactive Component" />
    <Container>
      <DemoBasic />
    </Container>
    <Footer />
  </div>

// eslint-disable-next-line
ReactDOM.render(<App />, document.querySelector("#demo"))
