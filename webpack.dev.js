const path = require("path");
// const nodeExternals = require("webpack-node-externals");
// const externalReact = require("webpack-external-react");

module.exports = {
  mode: "development",
  entry: "./src/components/root.tsx",
  output: {
    path: path.resolve(__dirname, "src/public/scripts"),
    filename: "bundle.js"
  },
  target: "web",
  externals: [],
  // externals: [nodeExternals(), externalReact.externals],
  devtool: "inline-source-map",
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
          configFile: "tsconfig.json"
        }
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        enforce: "pre", // executed previous to "post"
        loader: "tslint-loader",
        options: {
          configFile: "tslint.json",
          tsConfigFile: "tsconfig.json",
          emitErrors: true,
          fix: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
