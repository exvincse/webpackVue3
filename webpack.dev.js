// 合併webpack檔案
const merge = require("webpack-merge");
const webpack = require("webpack");
// 偵測port
const portfinder = require("portfinder");
// 終端機ui提示
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const app = require("./webpackConfig/main");
const app1 = require("./webpackConfig/main1");
const devWebpackConfig = [app, app1].map(item => merge(item, {
    mode: "development",
    module: {
        rules: [
            // 由url-loader先做處理,若大於limit則變file-loader做處理
            {
                // test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                // use: {
                //     loader: "url-loader",
                //     options: {
                //         limit: 10000, //bytes
                //         esModule: false,
                //         fallback: {
                //             loader: "file-loader",
                //             options: {
                //                 name: "[name].[ext]",
                //                 esModule: false,
                //                 publicPath: "./img"
                //             }
                //         }
                //     }
                // }

                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            emitFile: false,
                            name: "[name].[ext]",
                            esModule: false,
                            publicPath: `../../${item.name}/img`
                        }
                    }
                ]
                
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader", // translates CSS into CommonJS
                    "postcss-loader",
                    "sass-loader" // compiles Sass to CSS
                ]
            },
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
}))

module.exports = new Promise((resolve, reject) => {
    // 判斷當下取得的port能不能用(ex:預設8080，但有其他應用程式用則變成8081，以此類推)
    portfinder.basePort = devWebpackConfig[0].devServer.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            // process.env.PORT = port
            // add port to devServer config

            devWebpackConfig[0].devServer.port = port;

            // Add FriendlyErrorsPlugin
            devWebpackConfig[0].plugins.push(
                new FriendlyErrorsWebpackPlugin({
                    compilationSuccessInfo: {
                        messages: [
                            `Your application is running here: http://${devWebpackConfig[0].devServer.host}:${port}`
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