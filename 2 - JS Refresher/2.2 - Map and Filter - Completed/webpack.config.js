/**
 * Exercise Instructions:
 * - Open index.js
 * - Map through posts array and
 *   wrap each post.title in list items
 *   and save to postList
 * - Log out postList
 * - Filter posts with post.status
 *   of draft to drafts variable
 * - Log out drafts
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
