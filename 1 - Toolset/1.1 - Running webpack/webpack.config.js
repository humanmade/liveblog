/**
 * Exercise Instructions:
 * - Run webpack in terminal
 * - Test that index.html logs out
 *   Example 1 in the console
 * - Add in a second entry point for
 *   example-2.js
 * - Test that index.html logs out
 *   Example 1 and Example 2
 *   in the console
 */

var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'./example-1.js',
	],
	output: {
		filename: 'bundle.js'
	},
}
