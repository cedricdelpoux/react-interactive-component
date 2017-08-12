import PropTypes from "prop-types"
import React, {Component} from "react"

import Edit from "./components/Edit"
import LayoutTabs from "./layouts/Tabs"
import Preview from "./components/Preview"
import Tab from "./components/Tab"
import Tabs from "./components/Tabs"
import loadEditorTheme from "./utils/loadEditorTheme"

class ReactInteractiveComponent extends Component {
  constructor(props, context) {
    super(props, context)

    const originalComponent = this.getOriginalComponent()
    this.state = {
      enhancedProps: {...(originalComponent ? originalComponent.props : {})},
    }
    this.handleControlChange = this.handleControlChange.bind(this)
  }

  handleControlChange(name, value, valid) {
    const {enhancedProps} = this.state
    if (valid) {
      this.setState({enhancedProps: {...enhancedProps, [name]: value}})
    }
  }

  getOriginalComponent() {
    const {children, component} = this.props

    if (React.isValidElement(children)) {
      return children
    } else if (React.isValidElement(component)) {
      return component
    }

    return null
  }

  renderCustomLayout() {
    const {enhancedProps} = this.state
    const {children, component} = this.props
    const enhancedComponent = React.cloneElement(component, enhancedProps)
    return children(enhancedComponent, this.handleControlChange)
  }

  renderDefaultLayout(originalComponent) {
    const {enhancedProps} = this.state
    const {displayName, hiddenProps, tabsColor} = this.props
    const enhancedComponent = React.cloneElement(
      originalComponent,
      enhancedProps
    )
    return (
      <LayoutTabs
        displayName={displayName}
        enhancedComponent={enhancedComponent}
        onChange={this.handleControlChange}
        hiddenProps={hiddenProps}
        tabsColor={tabsColor}
      />
    )
  }

  render() {
    const {children, component} = this.props
    const originalComponent = this.getOriginalComponent()

    if (typeof children === "function" && React.isValidElement(component)) {
      return this.renderCustomLayout()
    } else if (originalComponent) {
      return this.renderDefaultLayout(originalComponent)
    } else {
      // eslint-disable-next-line
      console.log(originalComponent)
    }

    return null
  }
}

ReactInteractiveComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  component: PropTypes.element,
  displayName: PropTypes.string,
  hiddenProps: PropTypes.arrayOf(PropTypes.string),
  tabsColor: PropTypes.string,
}

ReactInteractiveComponent.defaultProps = {
  displayName: null,
  hiddenProps: [],
  tabsColor: null,
}

export {Edit, Preview, Tab, Tabs, loadEditorTheme}

export default ReactInteractiveComponent
