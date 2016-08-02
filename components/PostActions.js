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

		if (post.status === "publish") {
			return null
		} else if ( this.props.user.capabilities.publish_posts ) {
			return <div className="actions">
				<button
					className="secondary"
					onClick={()=>this.props.onRejectPost(this.props.post)}
				>Discard</button>
				<button
					className="primary"
					onClick={()=>this.props.onApprovePost(this.props.post)}
				>Publish</button>
			</div>
		} else {
			return null
		}
	}
}
