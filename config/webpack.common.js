const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');


module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Angular ES6 - jithureddy',
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap', 'sass-loader'], options: {
          includePaths: ['node_modules', 'node_modules/angular-material/*']
        }
      },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.jade$/, loader: 'jade-loader' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      // helps to load bootstrap's css.
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml'
      },
      {
        test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  devtool: 'eval-source-map'
};
