import React from 'react'

export default class PostActions extends React.Component {
	constructor() {
		super()
		this.state = {
			liked: false,
		}
	}

	render() {
		let { post } = this.props
		let published = post.status === "published"

		// fake it 'til we make it
		published = post.id % 2

		if (published) {
			return <div className="actions">
				<button
					className="action-like"
					onClick={() => this.setState({liked: !this.state.liked})}
				>{ this.state.liked ? "♥" : "♡" }</button>
			</div>
		} else {
			return <div className="actions">
				<button
					className="secondary"
				>Reject</button>
				<button
					className="primary"
				>Approve</button>
			</div>
		}
	}
}
