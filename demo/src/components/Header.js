import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import * as variables from "../variables.js"

import OctocatCorner from "./OctocatCorner"

const Container = styled.div`
  color: #fff;
  text-align: center;
  background-color: ${variables.mainColor};
  position: relative;

  ${variables.large} {
    padding: 5rem 6rem;
    margin-bottom: 5rem;
  }

  ${variables.medium} {
    padding: 3rem 4rem;
    margin-bottom: 3rem;
  }

  ${variables.small} {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }
`

const Title = styled.div`
  color: #fff;
  margin-top: 0;
  margin-bottom: 0.1rem;

  ${variables.large} {
    font-size: 3.25rem;
  }

  ${variables.medium} {
    font-size: 2.25rem;
  }

  ${variables.small} {
    font-size: 1.75rem;
  }
`

const Button = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  & + & {
    margin-left: 1rem;
  }

  ${variables.large} {
    padding: 0.75rem 1rem;
  }

  ${variables.medium} {
    padding: 0.6rem 0.9rem;
    font-size: 0.9rem;
  }

  ${variables.small} {
    display: block;
    width: 100%;
    padding: 0.75rem;
    font-size: 0.9rem;

    & + & {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`
const CornerLink = styled.a`
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
`

const Header = ({title}) =>
  <Container>
    <Title>
      {title}
    </Title>
    <Button href={variables.githubUrl}>
      {"Github"}
    </Button>
    <Button href={variables.npmUrl}>
      {"Npm"}
    </Button>
    <Button href={`${variables.githubUrl}/blob/master/docs/index.md`}>
      {"Documentation"}
    </Button>
    <CornerLink href={variables.githubUrl}>
      <OctocatCorner />
    </CornerLink>
  </Container>

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
