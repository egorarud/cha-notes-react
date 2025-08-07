const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
});
