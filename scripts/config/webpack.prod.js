const { shouldOpenAnalyzer } = require("../constants");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "none",
  plugins: [
    // * 打包前清理上一次的 dist 文件夹。
    new CleanWebpackPlugin(),
    // * 打包分析器。
    shouldOpenAnalyzer &&
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8888,
      }),
  ].filter(Boolean),
});
