const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const nodeExternals = require("webpack-node-externals");
// const externalReact = require("webpack-external-react");

module.exports = {
  mode: "production",
  entry: "./src/components/root.tsx",
  output: {
    path: path.resolve(__dirname, "dist/public/scripts"),
    filename: "bundle.js"
  },
  target: "web",
  externals: [],
  // externals: [nodeExternals(), externalReact.externals],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  devtool: "none",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/public"),
    watchContentBase: false,
    open: true,
    openPage: "./dist/router.html",
    lazy: false,
    overlay: {
      warnings: true,
      errors: true
    },
    host: "localhost",
    inline: true
  },
  module: {
    rules: [
      // each loader is executed from bottom to top
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: true,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        enforce: "post", // exected after "pre"
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.prod.json"
        }
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        enforce: "pre", // executed previous to "post"
        loader: "tslint-loader",
        options: {
          fix: true,
          emitErrors: true,
          tsConfigFile: "tsconfig.prod.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
