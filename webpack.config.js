const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const port = 3000;
const Dotenv = require("dotenv-webpack");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "dist"),
  },

  resolve: {
    modules: [path.join("./"), "node_modules"],
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
      {
        test: /\.(png|jpe?g|webp)$/,
        loader: "file-loader",
        options: {
          outputPath: "",
          publicPath: "dist",
          name(resourcePath, resourceQuery) {
            if (process.env.NODE_ENV === "development") {
              return "[path][name].[ext]";
            }
            return "[contenthash].[ext]";
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],
  devServer: {
    contentBase: "./public",
    port: port,
    open: true,
    hot: true,
  },
};
