新项目在配置vue-loader打包时出现如下错误：

```
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
 @ ./src/index.js 2:0-27 12:19-22

webpack 5.11.1 compiled with 3 errors and 1 warning in 1613 ms
```

## 原因

`vue-loader`在15以后的版本里面配置需要加个`VueLoaderPlugin`

## 解决方法

添加下方123处的代码

```javascript
const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin') // 代码1

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {},
  module: {},
  plugins: [ new VueLoaderPlugin() ],// 代码2
  mode: 'development'// 代码3
}

```

