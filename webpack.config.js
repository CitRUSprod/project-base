const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const WebpackBeforeBuildPlugin = require("before-build-webpack")
const NodemonPlugin = require("nodemon-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
const { createDeclarationFiles, getEntry, getPackagesPath } = require("./utils")
const babelOptions = require("./babel.config.json")


module.exports = (env = {}) => ({
    target: "node",
    mode: env.dev ? "development" : "production",
    devtool: env.dev ? "inline-source-map" : false,
    entry: () => getEntry(env.dev),
    output: {
        filename: "[name]/dist/index.js",
        path: getPackagesPath(),
        libraryTarget: "umd"
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: [
            ".js",
            ".ts"
        ]
    },
    plugins: [
        new WebpackBeforeBuildPlugin((stats, callback) => {

            console.log("Building...")
            createDeclarationFiles()
            callback()

        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "*/dist/**/*",
                "!*/dist/index.d.ts"
            ]
        }),
        ...env.nodemon ? [new NodemonPlugin()] : []
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions
                },
                exclude: /node_modules/
            },
            {
                test: /\.mjs$/,
                type: "javascript/auto"
            }
        ]
    }
})
