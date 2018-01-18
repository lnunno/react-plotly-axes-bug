const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true,
    // Shows errors and warnings in the browser on the dev server.
    overlay: {
      warnings: true, // Enable this when we have warning free code ;-)
      errors: true
    },
    proxy: {
      // Put any proxies to external development services here e.g.
      // "/api": {
      //   target: "http://myservice.sandia.gov",
      //   secure: false,
      //   changeOrigin: true,
      //   logLevel: "debug",
      // },
    },
  }
})
