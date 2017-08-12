import PropTypes from "prop-types"
import React from "react"

const InputCheckbox = ({className, onChange, style, value}) => {
  return (
    <input
      className={`token boolean ${className}`}
      onClick={e => onChange(e.target.checked, e.target.validity.valid)}
      style={style}
      type="checkbox"
      value={value}
    />
  )
}

InputCheckbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.bool.isRequired,
}

InputCheckbox.defaultProps = {
  className: "",
  style: {},
}

export default InputCheckbox
