/**
 * Exercise Instructions:
 * - Add react, react-components, react-dom
 *   to package dependencies
 * - Add webpack-dev-server to package
 *   dependencies
 * - Add react-hot-loader and redbox-react
 *   to package dependencies
 * - Add start: "node server.js" to scripts in
 *   package.json
 * - Add react-hot-loader to config entry
 * - Add webpack-dev-server to config entry
 * - Add webpack hot dev server to config
 *   entry
 * - Add hot replacement plugin to config
 * - Create a /components folder
 * - Check out the updated index.js file
 * - Create /components/App.js
 * - In App.js import React
 * - Create an App component and export it
 *   as default
 * - Create a constructor method that calss super
 * - Create a render method that returns a div
 *   with a class of app
 */

var path = require('path'),
		webpack = require('webpack')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
