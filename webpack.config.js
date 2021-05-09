const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const port = 3000;
const Dotenv = require("dotenv-webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
    publicPath: "/",
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
        test: /\.(png|jpe?g|webp|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      systemvars: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "src")],
    inline: true,
    hot: true,
    port: port,
    historyApiFallback: true,
  },
};
