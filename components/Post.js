import React from 'react'
import PostActions from './PostActions'

export default class Post extends React.Component {
	render() {
		let { post } = this.props

		return <div className="post">
			<header>
				<img className="avatar" src={post._embedded.author[0].avatar_urls[48]} />
				<div>
					<p>{post._embedded.author[0].name}</p>
					<p>{post.date}</p>
				</div>
			</header>

			<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />

			<PostActions post={post} />
		</div>
	}
}
