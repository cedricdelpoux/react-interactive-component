import PropTypes from "prop-types"
import React from "react"

const InputText = ({className, onChange, style, value}) => {
  return (
    <input
      className={`token string ${className}`}
      onChange={e => onChange(e.target.value, e.target.validity.valid)}
      style={style}
      type="text"
      value={value}
    />
  )
}

InputText.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
}

InputText.defaultProps = {
  className: "",
  style: {},
}

export default InputText
