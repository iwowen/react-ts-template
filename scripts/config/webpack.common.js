const webpack = require("webpack");
const path = require("path");
const { ROOTPATH } = require("../constants");

module.exports = {
  entry: {
    app: path.resolve(ROOTPATH, "src/index.js"),
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(ROOTPATH, "dist"),
  },
};
