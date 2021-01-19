const webpack = require("webpack");
const path = require("path");
const { ROOTPATH, isDev } = require("../constants");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { htmlConfig } = require("../config");
const {
  jsxRule,
  cssRule,
  scssRule,
  lessRule,
  imageRule,
  textRule,
} = require("./rules.config");

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    app: path.resolve(ROOTPATH, "src/index.js"),
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(ROOTPATH, "dist"),
    publicPath: "",
  },
  module: {
    rules: [jsxRule, cssRule, scssRule, lessRule, imageRule, textRule],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOTPATH, "public/index.html"),
      filename: "index.html",
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      config: htmlConfig[isDev ? "dev" : "build"],
    }),
    !isDev &&
      // * css 样式拆分，抽离公共代码。
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
        ignoreOrder: false,
      }),
  ].filter(Boolean),
};
