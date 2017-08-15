# react-interactive-component

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

ReactInteractiveComponent build custom controls from your component props and default props to let user interact easily with it. 

It keep in sync edit and preview sections to reflect changes in real time.

> Available files:
> * CommonJS build => `/lib`,
> * ES6 modules build => `/es`
> * UMD build => `/umd`

## Getting started

[![react-interactive-component](https://nodei.co/npm/react-interactive-component.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-interactive-component/)

You can download `react-interactive-component` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-interactive-component
npm install react-interactive-component --save
```

If you don't use package manager and you want to include `react-interactive-component` directly in your html, you could get it from the UNPKG CDN

```
https://unpkg.com/react-interactive-component/dist/react-interactive-component.min.js.
```

## Usage

```javascript
import React, {Component} from "react"
import ReactInteractiveComponent, {loadEditorTheme} from "react-interactive-component"
import YourReactComponent from "./src/YourReactComponent"

loadEditorTheme()

const Demo = () => (
  <ReactInteractiveComponent>
    <YourReactComponent />
  </ReactInteractiveComponent>
)
```

### Documentation

If you need some customization, checkout [documentation](./docs/index.md)

## Demo

![Demo](./docs/assets/demo.gif)

See [Demo page][github-page]

## Todo list

- [x] Preview of your component
- [x] Interactive edit of your component
- [x] Demo of your component
- [x] Custom styling
- [x] Tabs layout
- [x] Handle boolean props
- [x] Handle text props
- [x] Handle number props
- [ ] Handle function props
- [ ] Handle object props
- [ ] Handle array props
- [ ] Custom Layout

> Feel free to [create an issue][github-issue] to discuss about the missing features

## Contributing

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please [create an issue][github-issue].
* Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-interactive-component.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-interactive-component

[build-badge]: https://img.shields.io/travis/xuopled/react-interactive-component/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-interactive-component

[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-interactive-component.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-interactive-component

[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square

[github-page]: https://xuopled.github.io/react-interactive-component
[github-issue]: https://github.com/xuopled/react-interactive-component/issues/new
