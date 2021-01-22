const webpack = require('webpack');
// node.js path路由
const path = require("path");
// npm run start ,build清除dist資料夾
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 編譯出Vue template script css
const { VueLoaderPlugin } = require("vue-loader");
require("@babel/polyfill");

let entryNameAry = ['main', 'main1'];

function mutiple(name) {
    return {
        name: name,
        entry: {
            babel: "@babel/polyfill",
            [name]: path.resolve(__dirname, `src/${name}/${name}.js`)
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
                index: './src/main/index.html',
                about: './src/main1/about.html'
            }
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: `./${name}/js/[name].[hash].js`
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                'process.env': process.env.NODE_ENV === 'sit' ? require('./src/commonJs/envConfig/sit') : require('./src/commonJs/envConfig/local')
            })
        ]
    }
}

module.exports = entryNameAry.map(item => {
    let result = mutiple(item);
    if (item === 'main') {
        result.plugins.push(
            new CleanWebpackPlugin()
        )
    }
    return result;
});

// module.exports = ['main', 'main1'].map(item => {
//     let result = mutiple(item);
//     if (process.env.NODE_ENV === "production") {
//         // 生產版本設定
//         result.output.filename = `${result.name}/js/[name].[contenthash].js`;
//         result.plugins.push(
//             new MiniCssExtractPlugin({
//                 filename: `${result.name}/css/[name].[contenthash].css`
//             })
//         );
//     } else {
//         // 開發版本設定
//         result.output.filename = `${result.name}/js/[name].js`;
//         result.plugins.push(
//             new MiniCssExtractPlugin({
//                 filename: `${result.name}/css/[name].css`
//             })
//         );
//     }
//     return result;
// });