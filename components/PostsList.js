import React from 'react'
import Post from './Post'

export default class PostsList extends React.Component {
	constructor() {
		super()
		this.state = {
			user: null,
			sort: 'date',
			filter: 'all',
		}
	}

	render() {
		let posts = this.props.posts

		if (this.state.filter !== 'all') {
			posts = posts.filter( post => post.status === this.state.filter )
		}

		if (this.state.sort === 'likes') {
			posts = posts.sort( ( a, b ) => a.likes > b.likes )
		}

		return <div>
			<p className="post-filter">
				<span className="group">
					Sort:
					{' '}
					<a
						className={ this.state.sort == 'date' ? 'active' : ''}
						onClick={() => this.setState({ sort: 'date' })}
					>Date</a>
					{' | '}
					<a
						className={ this.state.sort == 'likes' ? 'active' : ''}
						onClick={() => this.setState({ sort: 'likes' })}
					>Likes</a>
				</span>
				<span className="group">
					Filter:
					{' '}
					<a
						className={ this.state.filter == 'all' ? 'active' : ''}
						onClick={() => this.setState({ filter: 'all' })}
					>All</a>
					{' | '}
					<a
						className={ this.state.filter == 'draft' ? 'active' : ''}
						onClick={() => this.setState({ filter: 'draft' })}
					>Drafts</a>
				</span>
			</p>
			{posts.map( post =>
				<Post key={post.id} post={post} />
			)}
		</div>
	}
}
