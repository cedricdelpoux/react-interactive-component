import {
  ADDITIONALS_EDITOR_THEMES,
  OFFICIALS_EDITOR_THEMES,
} from "../constants.js"

function loadEditorTheme(theme) {
  if (OFFICIALS_EDITOR_THEMES.indexOf(theme) !== -1) {
    require(`prismjs/themes/prism-${theme}.css`)
  } else if (ADDITIONALS_EDITOR_THEMES.indexOf(theme) !== -1) {
    require(`prism-themes/themes/prism-${theme}.css`)
  } else {
    require(`prismjs/themes/prism.css`)
  }
}

export default loadEditorTheme
