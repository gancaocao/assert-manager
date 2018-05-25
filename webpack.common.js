const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname + "/dist")
    },
    resolve: {
        extensions: [".vue", ".js", "css", "scss"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(["./dist"]),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/, use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }
}