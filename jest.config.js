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
    collectCoverageFrom: [
        "**/*.{js,vue}",
        // "src/**/*.vue",
        "!**/node_modules/**"
    ]
}
