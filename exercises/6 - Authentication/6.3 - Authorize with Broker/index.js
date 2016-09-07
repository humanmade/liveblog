import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import RedBox from 'redbox-react'
import App from './components/App'

let render = app => {
	ReactDOM.render(<AppContainer errorReporter={RedBox}>{app}</AppContainer>, document.getElementById( 'app' ))
}

if (module.hot) {
	module.hot.accept('./components/App', () => {
		// If you use Webpack 2 in ES modules mode, you can
		// use <App /> here rather than require() a <NextApp />.
		try {
			const NextApp = require('./components/App').default
			render(<NextApp />)
		} catch (e) {
			render(<RedBox error={e} />)
		}
	})
}

render(<App />)
