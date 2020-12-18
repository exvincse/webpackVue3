const path = require("path");
// 生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 把開發版本檔案原封不動複製到生產版本(ex:jquery套件)
const CopyPlugin = require("copy-webpack-plugin");
// 合併webpack檔案
const merge = require("webpack-merge");
const common = require("../webpack.config");

let main = merge(common[0], {
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": path.resolve("src"),
            'f01': path.resolve("src/main/component/f01"),
            'f02': path.resolve("src/main/component/f02")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve('dist/index.html'),
            template: path.resolve('src/main/index.html')
        }),
        new CopyPlugin([{
            from: path.resolve('src/main/content/img'),
            to: `./${common[0].name}/img`
        }]),
        new CopyPlugin([{
            from: path.resolve('src/main/content/plugins'),
            to: `./${common[0].name}/plugins`
        }])
    ]
})

module.exports = main;