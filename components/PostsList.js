import React from 'react'
import Post from './Post'

export default class PostsList extends React.Component {
	render() {
		return <div>
			{this.props.posts.map( post =>
				<Post key={post.id} post={post} />
			)}
		</div>
	}
}
