import React from 'react'

export default class MainContent extends React.Component {
	render() {
		let content = this.props.content

		return <div>
			<h1>{this.props.title}</h1>
			<p>{content}</p>
		</div>
	}
}
