import React from 'react'
import TimeAgo from 'react-components/js/timeago.jsx'
import PostActions from './PostActions'

export default class Post extends React.Component {
	render() {
		let { post } = this.props
		let date = new Date( post.date )

		return <div className="Post">
			<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />

			<div className="date">
				{post.status === 'pending' ?
					<span className="label">Pending</span>
				:
					<span>{date.getHours() + ':' + date.getMinutes()}</span>
				}
			</div>

			<div className="user-detail">
				<img className="avatar" src={post._embedded.author[0].avatar_urls[48]} />
				{post._embedded.author[0].name}
			</div>

			<PostActions
				post={post}
				user={this.props.user}
				onLikePost={this.props.onLikePost}
				onApprovePost={this.props.onApprovePost}
				onRejectPost={this.props.onRejectPost}
			/>
		</div>
	}
}
