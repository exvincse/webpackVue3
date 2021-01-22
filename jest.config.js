module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    // // 是否开启将测试覆盖率信息输出为报告
    // collectCoverage: true,
    // // 报告应从那些文件中收集
    // collectCoverageFrom: [
    //     "**/*.{js,jsx,vue}",
    //     "!**/node_modules/**"
    // ]
}
