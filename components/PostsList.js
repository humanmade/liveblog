import React from 'react'

export default class PostsList extends React.Component {
	static propTypes = {
		posts: React.PropTypes.array.isRequired,
	}

	render() {
		return <div>
			{this.props.posts.map( post => {
				return <div key={post.id}>{post.title.rendered}</div>
			})}
		</div>
	}
}
