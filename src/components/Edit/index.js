import PropTypes from "prop-types"
import React from "react"

import Control from "../Control"

const Edit = ({
  controlsClassNames,
  displayName,
  onChange,
  hiddenProps,
  controlsStyles,
  enhancedComponent,
}) => {
  const controls = Object.entries(enhancedComponent.props)
    .sort()
    .map(
      ([name, value]) =>
        hiddenProps.indexOf(name) === -1 &&
        <Control
          name={name}
          value={value}
          classNames={controlsClassNames}
          styles={controlsStyles}
          onChange={(name, value, valid) => onChange(name, value, valid)}
        />
    )
  return (
    <pre className="language-jsx">
      <span className="token tag">
        <span className="token punctuation">
          {"<"}
        </span>
        {displayName ? displayName : enhancedComponent.type.name}
      </span>
      {controls.map((control, i) =>
        <div key={i}>
          {control}
        </div>
      )}
      <span className="token punctuation">
        {"/>"}
      </span>
    </pre>
  )
}

Edit.propTypes = {
  controlsClassNames: PropTypes.shape({
    string: PropTypes.string,
    boolean: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  displayName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  hiddenProps: PropTypes.arrayOf(PropTypes.string),
  controlsStyles: PropTypes.shape({
    string: PropTypes.object,
    boolean: PropTypes.object,
    number: PropTypes.object,
  }).isRequired,
  enhancedComponent: PropTypes.element.isRequired,
}

Edit.defaultProps = {
  controlsClassNames: {
    boolean: "",
    number: "",
    string: "",
  },
  controlsStyles: {
    boolean: {},
    number: {},
    string: {},
  },
  displayName: null,
  hiddenProps: [],
}

export default Edit
