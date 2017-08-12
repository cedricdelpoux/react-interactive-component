# Basic usage

> If you need to customize tabs labels or add custom styles, checkout [advanced](./advanced.md) usage documentation.

```javascript
import ReactInteractiveComponent, {loadEditorTheme} from "react-interactive-component"
import MyComponent from "../src"

loadEditorTheme() // You can load one of PrismJs available themes

const data = {foo: "foo", bar:"bar"} // MyComponent required prop

const Demo = () =>
  <ReactInteractiveComponent
    // Optional:
    //
    // If not set MyComponent.type.name
    // Need to be specified when you code is minified
    displayName="MyComponent"
    //
    // If not set, MyComponent props and default props will be displayed
    hiddenProps={hiddenProps}
    //
    // Custom tabs color
    tabsColor="#27ae60"
  >
    <MyComponent data={data} />
  </ReactInteractiveComponent>

export default Demo
```
