const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry:{
        main: path.join(__dirname,"../src/index.js"),
        common:['react','react-dom']
    },
    output:{
        path:path.join(__dirname,"../build"),
        filename:"[name].js",

    },
    resolve:{
        extensions:['.js','.jsx','.json','.css','.less','sass','scss'],
    },
    performance: {
        hints: false
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]

            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(ico)$/,
                use:"raw-loader",
            },
            {
                test:/\.(svg|png|ico)$/,
                use:'file-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "../public/index.html")
        }),
       new MiniCssExtractPlugin({
           filename: "[name].css",
           chunkFilename: "[id].css"
       })
    ]
}
