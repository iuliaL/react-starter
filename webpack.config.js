'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
	entry: './app/index.js',
	module: {
		rules: [
			{
				test: /(\.css|\.sass)$/,
				exclude: /node_modules/,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					fallback: 'style-loader',
					// Could also be write as follow:
					// use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								sourceMap: true,
								importLoaders: 2,
								localIdentName: '[name]__[local]___[hash:base64:5]'
							}
						},
						{
							loader : 'sass-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader : 'postcss-loader',
							options: {
								plugins: function () {
									return [
										require("autoprefixer")
									];
								}
							}
						}
					]
				})),
			},
			{
				test: /\.(js)$/,
				exclude: /(node_modules|bower_components)/,
				use : ['babel-loader']
			}
		]
	},
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/' // avoid requesting server route instead of client route when hitting refresh /Cannot GET /route
	},
	plugins : [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		}),
		new ExtractTextPlugin({ filename: 'css/style.css', disable: false, allChunks: true }), // this means dist/css/style.css
	]
		
	
};


if(process.env.NODE_ENV === "production"){ // 'production ready'
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env' : {
				'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true })
	)
}

module.exports = config;