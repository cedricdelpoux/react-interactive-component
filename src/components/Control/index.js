import PropTypes from "prop-types"
import React, {Component} from "react"

import InputText from "../controls/InputText"
import InputNumber from "../controls/InputNumber"
import InputCheckbox from "../controls/InputCheckbox"

class Control extends Component {
  getComponent() {
    const {name, onChange, value} = this.props

    switch (typeof value) {
      case "boolean":
        return (
          <InputCheckbox
            onChange={(value, valid) => onChange(name, Boolean(value), valid)}
            value={Boolean(value)}
          />
        )
      case "number":
        return (
          <InputNumber
            onChange={(value, valid) => onChange(name, Number(value), valid)}
            value={Number(value)}
          />
        )
      case "string":
        return (
          <InputText
            onChange={(value, valid) => onChange(name, String(value), valid)}
            value={String(value)}
          />
        )
    }

    return null
  }

  getClassName() {
    const {classNames, value} = this.props
    const type = typeof value
    return type && classNames[type] ? classNames[type] : null
  }

  getStyle() {
    const {styles, value} = this.props
    const type = typeof value
    return type && styles[type] ? styles[type] : null
  }

  renderControl() {
    const ControlComponent = this.getComponent()

    if (ControlComponent) {
      return React.cloneElement(ControlComponent, {
        className: this.getClassName(),
        style: this.getStyle(),
      })
    }

    return "-"
  }

  render() {
    const {name} = this.props
    return (
      <div>
        {"  "}
        <span className="token attr-name">
          {name}
        </span>
        <span className="token attr-value">
          <span className="token punctuation">
            {"={"}
          </span>
          <span>
            {this.renderControl()}
          </span>
          <span className="token punctuation">
            {"}"}
          </span>
        </span>
      </div>
    )
  }
}

Control.propTypes = {
  name: PropTypes.string.isRequired,
  classNames: PropTypes.shape({
    boolean: PropTypes.string,
    number: PropTypes.string,
    string: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.shape({
    boolean: PropTypes.object,
    number: PropTypes.object,
    string: PropTypes.object,
  }),
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.func,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
}

Control.defaultProps = {
  classNames: {
    string: "",
    boolean: "",
    number: "",
  },
  styles: {
    string: null,
    boolean: null,
    number: null,
  },
}

export default Control
