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
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-browser.prod.js'
        }
    }
}))