const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./src/components/root.tsx",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "router.js"
  },
  target: "node",
  // externals: [nodeExternals()], // ignores node_modules and react modules when bundling in Webpack.
  devtool: "eval-source-map", // best quality SourceMaps for development.
  devServer: {
    contentBase: path.join(__dirname, "public"),
    watchContentBase: false,
    open: true,
    openPage: "router.html",
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
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
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
          tsConfigFile: "tsconfig.json",
          typeCheck: true
        }
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        enforce: "post", // exected after "pre"
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json"
        }
      },
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
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
