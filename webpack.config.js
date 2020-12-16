const webpack = require('webpack');
// node.js path路由
const path = require("path");
// 抽出css變成獨立檔案
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// npm run start ,build清除dist資料夾
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 編譯出Vue template script css
const { VueLoaderPlugin } = require("vue-loader");
require("@babel/polyfill");

function mutiple(name) {
    return {
        name: name,
        entry: {
            babel: "@babel/polyfill",
            [name]: `./src/${name}.js`
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            quiet: true,
            inline: true,
            host: "localhost",
            port: 8080,
            hot: false,
            open: false,
            watchOptions: {
                aggregateTimeout: 300
            },
            historyApiFallback: {
                index: `/index.html`
            }
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/',
            filename: '[name].[contenthash].js'
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "postcss-loader",
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new VueLoaderPlugin(),
            // 以下是解法。原因:目前使用 vue 3.x 会报错。（没有试过Vue新提出的vite ）
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: JSON.stringify(true),
                __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
            })
        ]
    }
}

let result = mutiple('main');
if (process.env.NODE_ENV === "production") {
    // 生產版本設定
    result.output.filename = `${result.name}/js/[name].[contenthash].js`;
    result.plugins.push(
        new MiniCssExtractPlugin({
            filename: `${result.name}/css/[name].[contenthash].css`
        })
    );
} else {
    //開發版本設定
    result.output.filename = `${result.name}/js/[name].js`;
    result.plugins.push(
        new MiniCssExtractPlugin({
            filename: `${result.name}/[name].css`
        })
    );
}

module.exports = result;