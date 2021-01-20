## 问题描述

使用`mini-css-extract-plugin`模块做css的单独分离打包，有链接的样式文件在打包时出现错误信息：

```
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
Error: Automatic publicPath is not supported in this browser
```

## 原因

猜测路径问题，具体未知

## 解决问题

在`webpack.config.js`文件中配置输出文件公共路径，如下所示：

```javas
module.exports = {
    output: {
        publicPath: './'
    }
}
```



