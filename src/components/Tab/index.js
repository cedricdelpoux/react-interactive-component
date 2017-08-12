import PropTypes from "prop-types"
import React from "react"

import {DEFAULT_TAB_ACTIVE_STYLES, DEFAULT_TAB_STYLES} from "../../constants.js"

const Tab = ({
  active,
  activeClassName,
  activeStyle,
  className,
  color,
  label,
  onClick,
  style,
  ...props
}) => {
  const classNames = [
    ...(className ? className : []),
    ...(active && activeClassName ? activeClassName : []),
  ]
  return (
    <div
      className={classNames.join(" ")}
      onClick={onClick}
      style={{
        ...style,
        ...(color ? {color: color} : {}),
        ...(active ? activeStyle : {}),
        ...(active && color ? {background: color} : {}),
      }}
      {...props}
    >
      {label}
    </div>
  )
}
Tab.propTypes = {
  active: PropTypes.bool,
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
}

Tab.defaultProps = {
  active: false,
  activeClassName: "active",
  activeStyle: DEFAULT_TAB_ACTIVE_STYLES,
  className: null,
  color: null,
  label: "",
  onClick: null,
  style: DEFAULT_TAB_STYLES,
}

export default Tab
