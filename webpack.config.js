const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/',
    host: 'localhost',
    port: 5000,
    writeToDisk: true,
    overlay: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.(jpe?g|png|gif|woff2?)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/',
            name: '[path][name].[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: { loader: '@svgr/webpack' },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 1,
          reuseExistingChunk: true,
        },
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react.bundle',
          priority: 2, // 우선순위가 높아야 리액트 모듈이 vendors 그룹에 들어가지 않는다.
          minSize: 100, // 파일크기 제한에 걸리지 않도록 낮은 값을 설정한다.
          reuseExistingChunk: true,
        },
      },
    },
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
