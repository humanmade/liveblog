/**
 * Exercise Instructions:
 * - Run webpack --watch
 * - Update example-2.js to log out
 *   "Example 2 - Updated"
 * - Refresh index.html in the browser
 * - Make sure console log is correct
 * - Check terminal to see the updates
 * - Type ctr + C in Terminal to stop watch
 */

var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'./example-1.js',
		'./example-2.js',
	],
	output: {
		filename: 'bundle.js'
	},
}
