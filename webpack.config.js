var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /pixi.js/, loader: 'expose?PIXI' },
            { test: /p2/, loader: 'expose?p2' },
            {
                test: /\.jsx?$/,
                include: /app/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            }
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi.js': pixi,
            'p2': p2
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'myApp',
            template: './app/index.html',
            inject: true,
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
