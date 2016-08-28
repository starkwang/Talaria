var webpack = require('webpack');
module.exports = {
    entry: {
        'index': './lib-bundle.js'
    },
    output: {
        filename: './static/lib/lib.js'
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: 'coffee-loader'
        }, {
            test: /\.css$/,
            loader: "css-loader"
        }, {
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
