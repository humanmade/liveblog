import React from 'react'

export default class PostActions extends React.Component {
	constructor() {
		super()
		this.state = {
			liked: false,
		}
	}

	render() {
		let liked = false;
		return <div className="actions">
			<button
				className="action-like"
				onClick={() => this.setState({liked: !this.state.liked})}
			>{ this.state.liked ? "♥" : "♡" }</button>
		</div>
	}
}
