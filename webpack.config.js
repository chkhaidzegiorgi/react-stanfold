const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
const root = path.resolve(__dirname);

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
      index: "/",
    },
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "https://b9b0-37-214-57-96.ngrok-free.app",
      },
    },
  },
  entry: [path.resolve(__dirname, "src", "index.tsx")],
  output: {
    path: path.resolve(root, "dist"),
  },

  resolve: {
    modules: [path.resolve(root, "node_modules")],
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: process.env.API_URL,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
