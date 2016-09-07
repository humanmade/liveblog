import React from 'react'
import Post from './Post'

export default class PostList extends React.Component {
	render() {

		let posts = this.props.posts

		return <div>

			{posts.map( post =>

				<Post
					key={post.id}
					post={post}
				/>

			)}

		</div>

	}
}
