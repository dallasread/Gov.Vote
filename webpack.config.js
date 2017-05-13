var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var js = {
    entry: ['./index.js'],
    output: { filename: './assets/application.min.js' },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'html?minimize=false' },
            { test: /\.png$/,  loader: 'url-loader?mimetype=image/png' },
            { test: /\.jpeg|\.jpg$/, loader: 'url-loader?mimetype=image/jpeg' }
        ],
    }
};

var css = {
    entry: ['./index.scss'],
    output: { filename: '../tmp/style.css' },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }]
    },
    plugins: [
        new ExtractTextPlugin('./assets/application.min.css')
    ]
};

module.exports = [js, css];
