const webpack = require("webpack");
const path = require("path");
const { ROOTPATH, isDev } = require("../constants");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { htmlConfig } = require("../config");
const Rules = require("./rules.config");

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
    rules: [
      Rules.jsxRule,
      Rules.cssRule,
      Rules.scssRule,
      Rules.lessRule,
      Rules.imageRule,
      Rules.textRule,
      // Rules.htmlRule, // html-withimg-loader处理后无法在html中使用ejs等语法
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(ROOTPATH, "public/index.html"),
      filename: "index.html",
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      config: htmlConfig[isDev ? "dev" : "build"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(ROOTPATH, "./public"),
          from: "*",
          to: path.resolve(ROOTPATH, "./dist"),
          toType: "dir",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
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
