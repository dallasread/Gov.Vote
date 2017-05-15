var path = require('path'),
    webpack = require('webpack'),
    isProduction = process.argv.indexOf('-p') !== -1,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    WriteJsonPlugin = require('write-json-webpack-plugin');

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
    },
    node: {
        fs: 'empty'
    }
};

var data = {
    entry: ['./data/build.js'],
    output: { filename: '../tmp/generate-data.js' },
    target: 'node',
    plugins: [
        new WriteJsonPlugin({
            object: require('./data/build'),
            filename: './data/data.json'
        })
    ]
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

// module.exports = [data];
module.exports = [js, css, data];
