# Tab

## Import

```javascript
import {Tab} from "react-interactive-component"
```

## Props

|Name|PropType|Description|Example
|---|---|---|---
|activeClassName|PropTypes.string|Name of the active className|active
|activeStyle|PropTypes.object|Override default style if not empty|{background: "green"}
|className|PropTypes.string|Style Tab with className|yourClass
|color|PropTypes.string|Can be any CSS color|#2ecc71
|label|PropTypes.string|The tab label|Tab x
|onClick|PropTypes.func|Callback called when user click on Tab|(event, index) => console.log(event, index)
|style|PropTypes.object|Style Tab with inline styles|{background: "transparent": color: "black"}
