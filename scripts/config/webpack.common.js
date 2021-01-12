const webpack = require("webpack");
const path = require("path");
const { ROOTPATH, isDev } = require("../constants");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { htmlConfig } = require("./config");

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    app: path.resolve(ROOTPATH, "src/index.js"),
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(ROOTPATH, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },
    ],
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
  ],
};
