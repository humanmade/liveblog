/**
 * Exercise Instructions:
 * - Create a variable named id
 * - Create a post object with a title property of "Hello ES6"
 *   and an id of 1 and title property
 * - Use shorthand property notation to assign
 *   an id to the post object
 * - Log out the post object
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
