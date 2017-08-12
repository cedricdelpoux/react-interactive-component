# Advanced usage

> If you juste need to change tabs color, hide some props from code sections or change the displayName of your component, checkout [basic](./basic.md) usage documentation.

```javascript
import ReactInteractiveComponent, {
  Edit,
  Preview,
  Tab,
  Tabs,
  loadEditorTheme,
} from "react-interactive-component"
import MyComponent from "../src"

loadEditorTheme() // You can load one of PrismJs available themes

const displayName = "MyComponent"
const hiddenProps = ["onChange", "onClick"]

const Demo = () =>
  <ReactInteractiveComponent
    component={<MyComponent data={{foo: "foo", bar:"bar"}} />}
  >
    {(enhancedComponent, onChange) =>
      <div>
        <Tabs>
          <Tab label="Preview">
            <Preview
              // Required:
              //
              // MyComponent enhanced by ReactInteractiveComponent to reflect updates from Edit component
              enhancedComponent={enhancedComponent}

              // Optional:
              //
              // If not set MyComponent.type.name
              // Need to be specified when you code is minified
              displayName={displayName}
              //
              // If not set, MyComponent props and default props will be displayed
              hiddenProps={hiddenProps}
            />
          </Tab>
          <Tab label="Edit">
            <Edit
              // Required:
              //
              // MyComponent enhanced by ReactInteractiveComponent to be updated by state
              enhancedComponent={enhancedComponent}
              //
              // Function called when a control change
              onChange={onChange}
              //
              // Optional:
              //
              // If not set MyComponent.type.name
              // Need to be specified when you code is minified
              displayName={displayName}
              //
              // If not set, MyComponent props and default props will be displayed
              hiddenProps={hiddenProps}
            />
          </Tab>
        </Tabs>

        {/* MyComponent with updated props */}
        {enhancedComponent}
      </div>}
  </ReactInteractiveComponent>

export default Demo
```
