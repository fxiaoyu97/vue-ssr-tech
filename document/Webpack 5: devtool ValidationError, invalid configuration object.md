Webpack5配置`config.devtool`时，在运行时报错。

配置信息如下所示：

```js
config.devtool = '#cheap-module-eval-source-map'
```

报错信息如下所示：

```
Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
 -configuration.devtool should match pattern "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$".
   BREAKING CHANGE since webpack 5: The devtool option is more strict.
   Please strictly follow the order of the keywords in the pattern.
```

## 原因

Webpack5 以后使用更加严格的检查方式，需要设置false

## 解决方法

修改代码如下所示：

```js
config.devtool = 'cheap-module-source-map'
```



