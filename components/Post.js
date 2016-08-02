import React from 'react'
import PostActions from './PostActions'

export default class Post extends React.Component {
	render() {
		let { post } = this.props
		let date = (new Date( post.date )).toISOString().split('T')[1].slice(0, 5)

		return <div className="Post">
			<div dangerouslySetInnerHTML={{__html: post.content.rendered}} />

			<div className="date">
				{post.status === 'pending' ?
					<span className="label">Pending</span>
				:
					<span>{date}</span>
				}
			</div>

			<div className="user-detail">
				<img className="avatar" src={post._embedded.author[0].avatar_urls[48]} />
				{post._embedded.author[0].name}
			</div>

			<PostActions
				post={this.props.post}
				onLikePost={this.props.onLikePost}
			/>
		</div>
	}
}
