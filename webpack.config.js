var webpack = require("webpack");

module.exports = {
    entry: "./js/main",
    resolve: {
        modulesDirectories: [
            "."
        ]
    },
    output: {
        publicPath: "/dist/js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};