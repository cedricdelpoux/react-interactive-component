import PropTypes from "prop-types"
import React from "react"

const InputNumber = ({className, onChange, style, value}) => {
  return (
    <input
      className={`token number ${className}`}
      onChange={e => onChange(e.target.value, e.target.validity.valid)}
      style={style}
      type="number"
      value={value}
    />
  )
}

InputNumber.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  value: PropTypes.number.isRequired,
}

InputNumber.defaultProps = {
  className: "",
  style: {},
}

export default InputNumber
