const { isDev } = require("../constants");

/**
 * js 和 jsx的loader
 */
const jsxRule = {
  test: /\.jsx?$/,
  use: ["babel-loader"],
  exclude: /node_modules/, //排除 node_modules 目录
};

/**
 * css 公共规则
 */
function getBaseCssRules(importLoaders = 1) {
  return [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            require("autoprefixer")({
              overrideBrowserslist: [">0.25%", "not dead"],
            }),
          ],
          sourceMap: isDev,
        },
      },
    },
  ];
}

const cssRule = {
  test: /\.css$/,
  use: getBaseCssRules(),
  exclude: /node_modules/,
};

const scssRule = {
  test: /\.(sc|sa)ss$/,
  use: [...getBaseCssRules(2), "sass-loader"],
  exclude: /node_modules/,
};

module.exports = {
  jsxRule,
  cssRule,
  scssRule,
};
