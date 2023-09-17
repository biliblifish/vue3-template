const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
// el按需导入组件
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

module.exports = {
  mode: process.env.NODE_ENV,
  optimization: {
    nodeEnv: false,
  },
  entry: './src/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    hot: true,
    open: false,
  },
  plugins: [
    // 将env变量注入到vue的代码里
    new Dotenv({ path: `./.env.${process.env.NODE_ENV}` }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      publicPath: process.env.CDN_PATH || './',
      title: 'vue3-template',
      minify: {
        collapseWhitespace: true, // 去掉空格
        removeComments: true, // 去掉注释
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new VueLoaderPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ],
      },
    ],
  },
};
