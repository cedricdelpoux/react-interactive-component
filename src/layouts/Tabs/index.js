import PropTypes from "prop-types"
import React from "react"

import Edit from "../../components/Edit"
import Preview from "../../components/Preview"
import Tab from "../../components/Tab"
import Tabs from "../../components/Tabs"

import {
  DEFAULT_EDIT_TAB_TEXT,
  DEFAULT_PREVIEW_TAB_TEXT,
} from "../../constants.js"

const LayoutTabs = ({
  enhancedComponent,
  displayName,
  onChange,
  hiddenProps,
  tabsColor,
}) => {
  return (
    <div>
      <Tabs color={tabsColor}>
        <Tab label={DEFAULT_PREVIEW_TAB_TEXT}>
          <Preview
            displayName={displayName}
            hiddenProps={hiddenProps}
            enhancedComponent={enhancedComponent}
          />
        </Tab>
        <Tab label={DEFAULT_EDIT_TAB_TEXT}>
          <Edit
            displayName={displayName}
            hiddenProps={hiddenProps}
            enhancedComponent={enhancedComponent}
            onChange={onChange}
          />
        </Tab>
      </Tabs>
      {enhancedComponent}
    </div>
  )
}

LayoutTabs.propTypes = {
  enhancedComponent: PropTypes.element.isRequired,
  displayName: PropTypes.string,
  hiddenProps: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  tabsColor: PropTypes.string,
}

export default LayoutTabs
