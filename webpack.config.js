var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: '"production"'}
		})
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['jsx-loader?harmony', 'babel'],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
