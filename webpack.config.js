const path = require('path');
// HTML模板中 BASE_URL 变量的设置
const { DefinePlugin } = require("webpack");

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    // 多入口
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
    // 多入口配置
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|jpeg|svg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      {
        test: /\.xml$/,
        use: 'xml-loader'
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new htmlWebpackPlugin({
      title: '管理输出',
      template: './public/index.html'
    })
  ]
}