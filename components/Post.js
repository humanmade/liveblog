import React from 'react'
import TimeAgo from 'react-components/js/timeago.jsx'
import PostActions from './PostActions'

export default class Post extends React.Component {
	render() {
		let { post } = this.props

		return <div className={post.status === "publish" ? "post" : "post draft"}>
			<header>
				<img className="avatar" src={post._embedded.author[0].avatar_urls[48]} />
				<div>
					<p>{post._embedded.author[0].name}</p>
					<TimeAgo time={post.date} />
				</div>
			</header>

			<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />

			<PostActions
				post={post}
				onLikePost={this.props.onLikePost}
				onApprovePost={this.props.onApprovePost}
				onRejectPost={this.props.onRejectPost}
			/>
		</div>
	}
}
