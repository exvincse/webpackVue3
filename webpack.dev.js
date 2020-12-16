// 合併webpack檔案
const merge = require("webpack-merge");
// 載入共用webpack檔案
const common = require("./webpack.config");

const app = require("./webpackConfig/app");
const webpack = require("webpack");
// 把開發版本檔案原封不動複製到生產版本(ex:jquery套件)
const CopyPlugin = require("copy-webpack-plugin");
// 偵測port
const portfinder = require("portfinder");
// 終端機ui提示
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devWebpackConfig = merge(app, {
    mode: "development",
    module: {
        rules: [
            // 由url-loader先做處理,若大於limit則變file-loader做處理
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000, //bytes
                        esModule: false,
                        fallback: {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                esModule: false,
                                publicPath: "./img"
                            }
                        }
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-browser.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = new Promise((resolve, reject) => {
    // 判斷當下取得的port能不能用(ex:預設8080，但有其他應用程式用則變成8081，以此類推)
    portfinder.basePort = devWebpackConfig.devServer.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            // process.env.PORT = port
            // add port to devServer config

            devWebpackConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(
                new FriendlyErrorsWebpackPlugin({
                    compilationSuccessInfo: {
                        messages: [
                            `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`
                        ]
                    }
                    // onErrors: config.dev.notifyOnErrors ?
                    //     utils.createNotifierCallback() :
                    //     undefined
                })
            );
            resolve(devWebpackConfig);
        }
    });
});