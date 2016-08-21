import React from 'react'

export default class Post extends React.Component {
	render() {
		let { post } = this.props

    return <div className="Post">
			<div dangerouslySetInnerHTML={{__html: post.content.rendered}} />

			<PostActions
				post={this.props.post}
				user={this.props.user}
				onRejectPost={this.props.onRejectPost}
				onApprovePost={this.props.onApprovePost}			
			/>

    </div>
  }
}
