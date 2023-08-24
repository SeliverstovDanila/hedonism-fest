const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: "festival.html",
      template: './src/festival.html'
    }),
    new HtmlWebpackPlugin({
      filename: "ui-kit.html",
      template: './src/ui-kit.html'
    }),
    new HtmlWebpackPlugin({
      filename: "error.html",
      template: './src/error.html'
    }),
    new HtmlWebpackPlugin({
      filename: "help.html",
      template: './src/help.html'
    }),
    new HtmlWebpackPlugin({
      filename: "application.html",
      template: './src/application.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),

  ]
}
