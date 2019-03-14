const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist')
  },
  /**
   * 1. npm install --save-dev style - loader css - loader 安装 css loader 处理 css 文件
   * 2. npm install --save-dev file-loader 安装 file loader 处理 图片
   * 3. file - loader 和 url - loader 可以接收并加载任何文件， 然后将其输出到构建目录 使用他们处理 字体文件
   */
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          'style-loader', //webpack 根据正则表达式， 来确定应该查找哪些文件， 并将其提供给指定的 loader。 在这种情况下， 以.css 结尾的全部文件， 都将被提供给 style - loader 和 css - loader。
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        text: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};