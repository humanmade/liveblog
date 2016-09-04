var webpack = require('webpack')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'./helpers',
		'./index'
	],
	output: {
		filename: 'bundle.js'
	}
}
