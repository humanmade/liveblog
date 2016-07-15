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

		if (post.status === "publish") {
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
