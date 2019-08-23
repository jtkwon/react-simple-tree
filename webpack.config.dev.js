const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "src");
const DOCS_DIR = path.resolve(__dirname, "docs");

module.exports = {
  mode: "development",
  entry: {
    docs: APP_DIR + "/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: DOCS_DIR,
    compress: true,
    port: 3000
  },
  output: {
    filename: "[name].js",
    path: DOCS_DIR,
    pathinfo: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "simple-react-tree"
    }),
    new HtmlWebpackRootPlugin()
  ],
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: [/(node_modules|bower_components)/],
        include: APP_DIR,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
