var webpack = require('webpack');
module.exports = {
    entry: {
        'index': './src/js/index.js',
        //'index': './test.js'
    },
    output: {
        filename: 'bundle.js',
        //filename: './static/lib/lib.js'
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
    },
    externals: {
        'react': 'window.lib["react"]',
        'react-tap-event-plugin': 'window.lib["react-tap-event-plugin"]',
        'react-dom': 'window.lib["react-dom"]',
        'react-router': 'window.lib["react-router"]',
        'material-ui': 'window.lib["material-ui"]',
        'react-addons-css-transition-group': 'window.lib["react-addons-css-transition-group"]',
        'superagent': 'window.lib["superagent"]',
        'eventproxy': 'window.lib["eventproxy"]'
    }
};
