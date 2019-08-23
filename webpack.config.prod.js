const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "src/react-simple-tree");
const BUILD_DIR = path.resolve(__dirname, "build");

module.exports = {
  mode: "production",
  entry: {
    reactSimpleTree: APP_DIR + "/react-simple-tree.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./docs"
  },
  output: {
    filename: "[name].js",
    path: BUILD_DIR,
    publicPath: BUILD_DIR,
    library: "react-simple-tree",
    libraryTarget: "umd"
  },
  plugins: [new CleanWebpackPlugin()],
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
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  }
};
