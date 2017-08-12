import PropTypes from "prop-types"
import React, {Component} from "react"

import {DEFAULT_TABS_STYLES} from "../../constants.js"

class Tabs extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      activeTabIndex: 0, // The first tab is active by default
    }
  }

  setActiveTabIndex(activeTabIndex) {
    this.setState({activeTabIndex})
  }

  renderPanels() {
    const {activeTabIndex} = this.state
    const {children} = this.props

    return React.Children.map(
      children,
      (child, i) => activeTabIndex === i && child.props.children
    )
  }

  renderTabs() {
    const {activeTabIndex} = this.state
    const {children, className, color, style, ...tabsProps} = this.props

    return (
      <div
        className={className}
        style={{...style, ...(color ? {borderBottomColor: color} : {})}}
        {...tabsProps}
      >
        {React.Children.map(children, (child, i) => {
          const {color: tabColor, label, onClick, ...childProps} = child.props
          return React.cloneElement(
            child,
            Object.assign(
              {
                color, // Spred "Tabs" color prop to "Tab" component
                label: label ? label : "Tab " + i, // Prevent empty tab
              },
              childProps,
              {
                active: activeTabIndex === i,
                ...(tabColor ? {color: tabColor} : {}), // Override "Tabs" color prop if "Tab" color prop isset
                onClick: e => {
                  this.setActiveTabIndex(i)
                  onClick && onClick(e, i)
                },
              }
            )
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderTabs()}
        {this.renderPanels()}
      </div>
    )
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
}

Tabs.defaultProps = {
  className: null,
  color: null,
  style: DEFAULT_TABS_STYLES,
}

export default Tabs
