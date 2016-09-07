import React from 'react'
import MainContent from './MainContent'

export default class App extends React.Component {
	render() {
		let title = 'Welcome!'
		let content = 'A React project'

		return <MainContent
			title={title}
			content={content}
		/>
	}
}
