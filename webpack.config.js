const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  devServer: {
    hot: true,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html",
  //     filename: "index.html",
  //   }),
  // ],
};
