const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: "source-map",
  entry: {
    app: "./src/ts/index.tsx",
  },
  output: {
    filename: "./build/webapp.js",
  },
  module: {
    rules: [
      {
        loader: 'ify-loader',
        test: /\.js$/,
      },
      {
        loader: "ts-loader",
        test: /\.(ts|tsx)?$/,
      },
      {
        loader: "style-loader!css-loader",
        test: /\.css$/,
      },
      {
        loader: "style-loader!css-loader!sass-loader",
        test: /\.scss$/,
      },
      {
        loader: "url-loader?limit=100000",
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          typeCheck: true,
          failOnHint: false,
          tsConfigFile: 'tsconfig.json',
          configFile: 'tslint.json',
          fix: false, // Enable if you're confident in the quality of your code.
        }
      },
    ],
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss", ".css"],
    alias: {
      // These MUST be in sync with Typescript's compilerOptions.paths property.
      // See: https://webpack.js.org/configuration/resolve/#resolve-alias
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      },
    })
  ],
};
