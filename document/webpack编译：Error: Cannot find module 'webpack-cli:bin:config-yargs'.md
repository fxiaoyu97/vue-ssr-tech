**运行`npm run dev`遇到的问题：Error: Cannot find module 'webpack-cli/bin/config-yargs'**

错误信息如下所示：

```
> cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js

internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module 'webpack-cli/bin/config-yargs'
Require stack:
- /Volumes/work/WebProjects/vue-ssr-tech/node_modules/webpack-dev-server/bin/webpack-dev-server.js
```

## 原因

`webpack-cli`的版本不兼容 

## 解决方法

1. Webpack 5以后使用`webpack server`命令替代`webpack-dev-server`命令

```
webpack serve --config webpack.config.js
```



2. 使用`webpack-cli@3`的版本

```shell
# 卸载当前的 webpack-cli
npm uninstall webpack-cli
# 安装 webpack-cli 3.* 版本
npm install webpack-cli@3
```

