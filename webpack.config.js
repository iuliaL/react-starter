'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
	entry: './app/index.js',
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader']},
			{ test: /\.(js)$/, use : ['babel-loader']}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/' // avoid requesting server route instead of client route when hitting refresh /Cannot GET /route
	},
	plugins : [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
		
	
};


if(process.env.NODE_ENV === "production"){ // 'production ready'
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env' : {
				'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	)
}

module.exports = config;