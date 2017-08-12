import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import * as variables from "../variables.js"

const Container = styled.div`
  color: #fff;
  text-align: center;
  background-color: ${variables.mainColor};
  position: relative;
  padding: 1rem;

  ${variables.large} {
    margin-top: 5rem;
  }

  ${variables.medium} {
    margin-top: 3rem;
  }

  ${variables.small} {
    margin-top: 2rem;
  }
`

const Link = styled.a`color: #fff;`

const Footer = () =>
  <Container>
    {"Made by "}
    <Link href="https://github.com/xuopled">
      {"xuopled"}
    </Link>
  </Container>

Footer.propTypes = {
  title: PropTypes.string,
}

export default Footer
