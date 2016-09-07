var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'./helpers',
		'./index'		
	],
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}
