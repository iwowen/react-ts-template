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

```json
...
"scripts": {
    "build": "webpack --config ./scripts/config/webpack.common.js"
},
...
```
