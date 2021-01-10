webpack出现关于`babel-preset-env'`模块的错误信息：

```
Module build failed (from ./node_modules/babel-loader/lib/index.js): 
Error: Cannot find module 'babel-preset-env' from '...' 
- Did you mean "@babel/env"?
```

## 原因

`babel-core`和`babel-preset-env`依赖被替换为`@babel/core`和`@babel/preset-env`，因为新版本的Babel7中对官方提供的依赖使用了命名空间`@babel`。

## 解决方法

1. 更换安装命令为：`npm install babel-loader @babel/core @babel/preset-env --save-dev`
2. 修改配置文件，在`.babelrc`文件或`webpack.config.js`文件中，将原来的`env`替换为`@babel/preset-env`

```json
{    
    "presets": [
        ["@babel/preset-env"]
   ]
}
```

```javascript
module: {
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', { modules: false }]
                }
            }
        }
    ]
}
```

