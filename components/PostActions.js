import React from 'react'

export default class PostActions extends React.Component {
	constructor() {
		super()
		this.state = {
			liked: false,
		}
	}

	onLikePost() {
		this.setState({liked:true})
		this.props.onLikePost(this.props.post)
	}

	render() {
		let { post } = this.props

		return <div className="actions">
			{typeof post.liveblog_likes === 'number' ?
				<div className="likes-container">
					<span className="likes-counter">{post.liveblog_likes ? post.liveblog_likes : ''}</span>
					<button
						className="action-like"
						onClick={() => this.onLikePost()}
						disabled={this.state.liked}
					>{ this.state.liked ? "♥" : "♡" }</button>
				</div>
			: null}
		</div>
	}
}
