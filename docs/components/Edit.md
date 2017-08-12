# Edit

## Import

```javascript
import {Edit} from "react-interactive-component"
```

## Props

|Name|PropType|Description|Example
|---|---|---|---
|controlsClassNames|PropTypes.object|Classes to customize controls|{text: "", checkbox: "", number: ""}
|controlsStyles|PropTypes.object|Styles to customize controls|{text: {}, checkbox: {}, number: {}}
|displayName|PropTypes.string|Custom display name for your component|Button
|hiddenProps|PropTypes.string|Props to hide|["onClick", "onChange"]
|enhancedComponent|PropTypes.element|Your react component enhanced by state to be updated|
