import React from 'react'

export default class App extends React.Component {
	render() {
		return <div>
			<h1>{this.props.title}</h1>
			<p>{this.props.content}</p>
		</div>
	}
}
