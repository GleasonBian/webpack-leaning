const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist')
  },
  // npm install --save-dev style-loader css-loader  执行 这个 安装 
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          'style-loader', //webpack 根据正则表达式， 来确定应该查找哪些文件， 并将其提供给指定的 loader。 在这种情况下， 以.css 结尾的全部文件， 都将被提供给 style - loader 和 css - loader。
          'css-loader'
        ]
      }
    ]
  }
};