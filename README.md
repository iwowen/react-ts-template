# react-template

本项目基于 webpack 搭建 react 模版

## 初始化 webpack 项目

1. 初始化 npm 项目

```shell
npm init -y
```

2. 安装 webpack 依赖

```shell
npm install webpack webpack-cli -D
```

3. 编写 webpack 配置文件

```javascript
module.exports = {
  entry: {
    app: path.resolve(ROOTPATH, "src/index.js"),
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(ROOTPATH, "dist"),
  },
};
```

4. 在 package.json 中编写 npm 命令

windows 不支持 NODE_ENV=development 的设置方式。
所以先安装 cross-env

```shell
npm install cross-env -D
```

```json
// pacakge.json
...
"scripts": {
    "build": "cross-env NODE_ENV=production webpack --config ./scripts/config/webpack.common.js"
},
...
```

5. js 转为低版本代码 `babel`

- 推荐
  [不可错过的 Babel7 知识](https://juejin.im/post/6844904008679686152)

- 安装 babel-loader

```shell
npm install babel-loader -D
```

- 还需要一些配置

```shell
npm install @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime -D

npm install @babel/runtime @babel/runtime-corejs3
```

- 在根目录创建 `.babelrc` 配置文件

6. 使用 HtmlWebpackPlugin 解析 html 文件

安装

```shell
npm install html-webpack-plugin -D
```

````

通过 HtmlWebpackPlugin 插件的 config 属性能够设置 html 内数据。

7. 添加本地服务器

安装

```shell
npm install webpack-dev-server -D
````

修改运行命令

```shell
"dev": "cross-env NODE_ENV=production webpack-dev-server --config ./scripts/config/webpack.dev.js",
```

使用 webpack.dev.js 保存开发配置，使用 webpack-merge 合并基础配置

8. devtool

`devtool`用于方便开发调试代码。
这里在 `webpack.dev.js` 中配置`devtool`为`cheap-module-eval-source-map`，可定位到行。
devtool 说明: [https://www.cnblogs.com/tugenhua0707/p/9464984.html](https://www.cnblogs.com/tugenhua0707/p/9464984.html)

9. 样式文件支持

安装依赖，然后配置 loader

```shell
npm install style-loader sass-loader css-loader postcss-loader autoprefixer node-sass -D
```

10. url-loader 解决图片文字引入问题

11. 每次打包前清空 dist 目录 (clean-webpack-plugin)

12. 拷贝 public 下静态文件（copy-webpack-plugin）
