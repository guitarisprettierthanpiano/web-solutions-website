const path = require('path');
const Dotenv = require('dotenv-webpack'); //dotenv

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    watch: true,
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js"
        ]
    },
    plugins: [new Dotenv() //dotenv stuff
    ],
}