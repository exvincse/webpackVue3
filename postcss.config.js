module.exports = {
//   plugins: {
//     precss: {}, // 使用類似 SASS 的功能，例如：變數
//     autoprefixer: {
//       // 加入各家瀏覽器的前綴詞
//       browsers: [
//         // 指定支援的瀏覽器版本
//         'Chrome >= 52',
//         'FireFox >= 44',
//         'Safari >= 7',
//         'Explorer >= 11',
//         'last 2 Edge versions',
//       ],
//     },
//   },
    plugins: [
        // require('autoprefixer')({
        //     "browsers": [
        //         "defaults",
        //         "not ie < 11",
        //         "last 2 versions",
        //         "> 1%",
        //         "iOS 7",
        //         "last 3 iOS versions"
        //     ]
        // })
        require('autoprefixer')()
    ]
};