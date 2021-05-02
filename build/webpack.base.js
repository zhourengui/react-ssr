const path = require("path")

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  plugins: [],
}
