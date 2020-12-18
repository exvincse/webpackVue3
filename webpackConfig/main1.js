const path = require("path");
// 生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 把開發版本檔案原封不動複製到生產版本(ex:jquery套件)
const CopyPlugin = require("copy-webpack-plugin");
// 合併webpack檔案
const merge = require("webpack-merge");
const common = require("../webpack.config");

let main1 = merge(common[1], {
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": path.resolve("src"),
            'f01': path.resolve("src/main1/component/f01"),
            'f02': path.resolve("src/main1/component/f02")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve('dist/index1.html'),
            template: path.resolve('src/main1/index1.html')
        }),
        new CopyPlugin([{
            from: path.resolve('src/main1/content/img'),
            to: `./${common[1].name}/img`
        }]),
        new CopyPlugin([{
            from: path.resolve('src/main1/content/plugins'),
            to: `./${common[1].name}/plugins`
        }])
    ]
})

module.exports = main1;