const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
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