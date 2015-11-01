var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var APP_PATH = path.resolve( __dirname, 'app');
var BUILD_PATH = path.resolve(__dirname, 'build');

process.env.BABEL_ENV = TARGET;

var common = {

    entry: APP_PATH,
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: APP_PATH
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: APP_PATH
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'React Fun'
        })
    ]
};

if( TARGET === 'start' || !TARGET ) {
    module.exports = merge( common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            color: true,
            port: 4000
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
