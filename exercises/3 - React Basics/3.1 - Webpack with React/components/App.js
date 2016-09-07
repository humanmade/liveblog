import React from 'react'
import MainContent from './MainContent'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			title: 'Welcome',
			content: 'A React project'
		}
	}
	componentWillMount() {
		this.setState( {title: 'Updated'} )
	}
	render() {
		return <MainContent
			title = {this.state.title}
			content = {this.state.title}
		/>
	}
}
