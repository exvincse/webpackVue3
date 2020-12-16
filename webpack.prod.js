const merge = require("webpack-merge");
const common = require("./webpack.config");
const CopyPlugin = require("copy-webpack-plugin");
const app = require("./webpackConfig/app");
module.exports = merge(app, {
    mode: "production",
    module: {
        rules: [
            // 由url-loader先做處理,若大於limit實則變fileloader
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                use: [{
                        loader: "url-loader",
                        options: {
                            limit: 10000, //bytes
                            esModule: false,
                            name: "[name].[ext]",
                            fallback: {
                                loader: "file-loader",
                                options: {
                                    name: "[name].[ext]",
                                    esModule: false,
                                    publicPath: "./img",
                                    outputPath: "./img"
                                }
                            }
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-browser.prod.js'
        }
    }
});