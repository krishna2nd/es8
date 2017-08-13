const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      react: 'react',
      'react-dom': 'react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        exclude: [
          /node_modules/,
          /server/
        ],
        
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'es2016', 'es2017']
          }
        }
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]'
            }
        }, {
            loader: "less-loader"
        }]
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader" 
        }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]'
            }
        }]
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};