import React from 'react'
import Post from './Post'

export default class PostsList extends React.Component {
	constructor() {
		super()
		this.state = {
			filter: 'all',
		}
	}

	render() {
		let posts = this.props.posts

		if (this.state.filter !== 'all') {
			posts = posts.filter( post => post.status === this.state.filter )
		}

		return <div className="PostsList">
			<p className="post-filter">
				{this.props.showFilter ?
					<span className="group">
						Filter:
						<a
							className={ this.state.filter === 'all' ? 'active' : ''}
							onClick={() => this.setState({ filter: 'all' })}
						>All</a>
						<a
							className={ this.state.filter === 'pending' ? 'active' : ''}
							onClick={() => this.setState({ filter: 'pending' })}
						>Pending</a>
					</span>
				: null}
				{this.props.isLoadingPosts ?
					<span className="loading-status">
						Loading Posts...
					</span>
				: null }
			</p>
			{this.props.posts.length === 0 ?
				<p>No posts have been published yet, stand by...</p>
			: null}
			{posts.map( post =>
				<Post
					key={post.id}
					post={post}
				/>
			)}
		</div>
	}
}
