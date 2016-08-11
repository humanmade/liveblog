/**
 * Exercise Instructions:
 * - Open index.js
 * - Create a new class called Component
 * - Create a constructor() method and assign this.state to an empty object
 * - Create another method called render and return 'Component'
 * - Create a new class MyComponent that extends Component
 * - Create a method render that returns 'MyComponent'
 * - Create a new instance of MyComponent called c
 * - Log out c.render
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
