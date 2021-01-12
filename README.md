# electron-react-template

本项目使用 react + typescript 开发，通过 electron 打包为桌面应用。

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

- 添加 webpack 配置

```javascript
module: {
    rules: [
        {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
        },
    ],
},
```

- 在根目录创建 `.babelrc` 配置文件

```javascript
{
  // * 执行顺序从后往前。
  "presets": [
    [
      // * 使用 polyfill 代替一些浏览器不能识别的 ES 新的 API。
      "@babel/preset-env",
      {
        // ! 防止 babel 将任何模块类型都转译成 CommonJS 类型，导致 tree-shaking 失效问题。
        "modules": false
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        },
        "useESModules": true
      }
    ]
  ]
}
```
