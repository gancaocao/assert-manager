const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
module.exports = merge(common,{
    devtool:"source-inline-map",
    mode:"development",
    devServer:{
        contentBase:"./dist",
        hot: true
    },
    plugins:[new webpack.NamedModulesPlugin(),new webpack.HotModuleReplacementPlugin()]
});