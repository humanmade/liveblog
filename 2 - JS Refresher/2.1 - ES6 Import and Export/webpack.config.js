/**
 * Exercise Instructions:
 * - Run webpack --watch in Terminal
 * - Open helpers.js and export
 *   the logName function as default
 * - Open the index.js and import
 *   the logName function from helpers.js
 * - Call the function logName and pass in
 *   your name
 */

var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
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
