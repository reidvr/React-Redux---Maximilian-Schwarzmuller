const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          // "style-loader/url", <-- this will inject css into bundle
          {
            loader: "file-loader",
            options: {
              name: "css/main.css"
            }
          },
          "sass-loader"
        ] //Below will store css in bundle file rather than creating a separate css file, not sure which is better?
        // use: [
        //   {
        //     loader: "style-loader" // creates style nodes from JS strings
        //   },
        //   {
        //     loader: "css-loader" // translates CSS into CommonJS
        //   },
        //   {
        //     loader: "sass-loader" // compiles Sass to CSS
        //   }
        // ]
      }
    ]
  },
  resolve: {
   // extensions: [".js", ".jsx"]
  },
  //devtool: "source-map"
};
