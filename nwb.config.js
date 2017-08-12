var extraWebpackConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        include: /src/,
      },
    ],
  },
}

// eslint-disable-next-line
module.exports = {
  type: "react-component",
  polyfill: false,
  npm: {
    cjs: true,
    esModules: true,
    umd: {
      global: "ReactInteractiveComponent",
      externals: {
        react: "React",
        "prop-types": "PropTypes",
      },
    },
  },
  uglify: false,
  webpack: {
    extra: extraWebpackConfig,
  },
}
