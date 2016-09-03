In this exercise we go over how to install and setup Webpack from scratch.

### Instructions

- Install webpack with '$ npm install webpack -g' in Terminal
- Open package.json and under dependencies add 'webpack' with the version of 'latest'
- Create a webpack.config.js file
- Require webpack and assign it to a variable named webpack
- Create a module.exports object
- Create an array property of 'entry' with two values: './example-1.js' and './example-2.js'
- Create a property of 'output' and make it an object
- Create a property of 'filename' as a property of 'output' and assign it to 'bundle.js'
- Create a property of 'devtool' and assign to 'cheap-eval-source-map'
- Run 'npm install'
- Run 'webpack'
- Test that index.html logs out Example 1 in the console
- Add in a second entry point for example-2.js
- Test that index.html logs out Example 1 and Example 2 in the console


### Links

- https://webpack.github.io/docs/installation.html
- https://webpack.github.io/docs/configuration.html
- https://webpack.github.io/docs/configuration.html#devtool