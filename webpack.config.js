const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

const APP_DIR = path.resolve(__dirname, "src/docs");
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
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  output: {
    filename: "[name].js",
    path: DOCS_DIR,
    pathinfo: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react-simple-tree",
      template: APP_DIR + "/index.html"
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
