// 抽出css變成獨立檔案
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const app = require("./webpackConfig/main");
const app1 = require("./webpackConfig/main1");

module.exports = [app, app1].map(item => merge(item, {
    mode: "production",
    module: {
        rules: [
            // 由url-loader先做處理,若大於limit實則變fileloader
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
                use: [{
                        // loader: "url-loader",
                        // options: {
                        //     limit: 10000, //bytes
                        //     esModule: false,
                        //     name: "[name].[ext]",
                        //     fallback: {
                        //         loader: "file-loader",
                        //         options: {
                        //             name: "[name].[ext]",
                        //             esModule: false,
                        //             publicPath: "./img",
                        //             outputPath: "./img"
                        //         }
                        //     }
                        // }
                        loader: "file-loader",
                        options: {
                            emitFile: false,
                            name: "[name].[ext]",
                            esModule: false,
                            publicPath: `../../${item.name}/img`
                        }
                    },
                    // 'image-webpack-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", // translates CSS into CommonJS
                    "postcss-loader",
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.runtime.esm-browser.prod.js'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${item.name}/css/[name].[hash].css`
        }),
    ]
}))