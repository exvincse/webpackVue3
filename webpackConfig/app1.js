const path = require("path");
// 生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 把開發版本檔案原封不動複製到生產版本(ex:jquery套件)
const CopyPlugin = require("copy-webpack-plugin");
// 合併webpack檔案
const merge = require("webpack-merge");
const common = require("../webpack.config");

function resolve(dir) {
    return path.join(__dirname, dir);
}
let app1 = merge(common,{
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": resolve("src"),
            'f01': resolve("src/component/App1/f01"),
            'f02': resolve("src/component/App1/f02")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve('dist/index.html'),
            template: path.resolve('src/index.html')
        }),
        new CopyPlugin([{
            from: path.resolve('src/content/App1/img'),
            to: `./${common.name}/img`
        }]),
        new CopyPlugin([{
            from: path.resolve('src/content/App1/plugins'),
            to: `./${common.name}/plugins`
        }])
    ]
})

module.exports = app1;