const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "src/docs");
const RST_DIR = path.resolve(__dirname, "src/react-simple-tree");
const DOCS_DIR = path.resolve(__dirname, "docs");

module.exports = {
  mode: "development",
  entry: {
    docs: APP_DIR + "/index.js",
    reactSimpleTree: RST_DIR + "/react-simple-tree.js"
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!fontawesome/*"]
    }),
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
        include: [APP_DIR, RST_DIR],
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
