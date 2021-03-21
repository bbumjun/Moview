const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const port = 3000;
const dotenv = require("dotenv");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "dist"),
    pathinfo: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js", "jsx", ".css"],
    fallback: {
      fs: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?/,
        use: ["babel"],
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
    ,
    new dotenv(),
  ],
  devServer: {
    port: port,
    open: true,
    hot: true,
  },
};
