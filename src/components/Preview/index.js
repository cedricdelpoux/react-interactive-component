import Prism from "prismjs"
import PropTypes from "prop-types"
import React from "react"
import reactElementToJSXString from "react-element-to-jsx-string"

import "prismjs/components/prism-jsx"

const Preview = ({displayName, hiddenProps, enhancedComponent}) => {
  const code = reactElementToJSXString(enhancedComponent, {
    displayName: () =>
      displayName ? displayName : enhancedComponent.type.name,
    filterProps: hiddenProps,
    sortProps: true,
    useBooleanShorthandSyntax: false,
    showDefaultProps: true,
  })
  const htmlCode = Prism.highlight(code, Prism.languages.jsx)
  return (
    <pre
      className="language-jsx"
      dangerouslySetInnerHTML={{__html: htmlCode}}
    />
  )
}

Preview.propTypes = {
  displayName: PropTypes.string,
  hiddenProps: PropTypes.arrayOf(PropTypes.string),
  enhancedComponent: PropTypes.element.isRequired,
}

Preview.defaultProps = {
  displayName: null,
  hiddenProps: [],
}

export default Preview
