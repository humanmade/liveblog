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
