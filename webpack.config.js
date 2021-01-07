const path = require("path"); // 使用绝对路径，防止出现问题

module.exports = {
  entry: path.join(__dirname, "src/index.js"), // __dirname表示这个文件所在目录的地址,path.join表示两个路径拼接起来,entry表示文件入口
  // 文件出口
  output: {
    filename: "bundle.js", // 输出文件
    path: path.join(__dirname, "dist"), // 输出路径
  },
  module: {
    // 添加规则
    rules: [
      {
        test: /\.vue$/, // 检测文件类型,正则表达式
        loader: "vue-loader" // 匹配到相关文件时，处理时使用的模块
      },
      {
          test: /\.css$/, // 处理css文件
          // css-loader只能处理css文件，不能把文件写入html文件中，需要借助其他模块
          use:[
              'style-loader', // 把css文件写入html中
              'css-loader'
          ]
      },
      {
          test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片
          use: [
              {
                  loader: 'url-loader', // 处理时使用的loader,依赖于file-loader
                  // 对loader的配置
                  options: {
                      limit: 1024, // 图片转化成base64代码，写道js文件中，文件大小 小于1024转化成base64代码
                      name: '[name].[ext]' // 定义输出文件的名称
                  }
              }
          ]
      }
    ]
  }
}
