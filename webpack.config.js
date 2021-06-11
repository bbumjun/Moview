const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const port = 3000;
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV !== "production";
module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.join(__dirname, "public"),
    publicPath: "/",
  },

  resolve: {
    modules: [path.join("./"), "node_modules"],
    extensions: [".tsx", ".ts", ".js", "jsx"],
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["babel-loader", "ts-loader"],
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
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true,
    }),
    new Dotenv({
      systemvars: true,
    }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new BundleAnalyzerPlugin(),
  ].filter(Boolean),

  devServer: {
    hot: true,
    port: port,
    historyApiFallback: true,
  },

  stats: "summary",
};
