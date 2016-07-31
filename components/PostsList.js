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
			posts = posts.sort( ( a, b ) => a.liveblog_likes > b.liveblog_likes ? -1 : 1 )
		} else {
			posts = posts.sort( ( a, b ) => a.date > b.date ? -1 : 1 )
		}

		return <div className="PostsList">
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
				{this.props.showFilter ?
					<span className="group">
						Filter:
						{' '}
						<a
							className={ this.state.filter == 'all' ? 'active' : ''}
							onClick={() => this.setState({ filter: 'all' })}
						>All</a>
						{' | '}
						<a
							className={ this.state.filter == 'pending' ? 'active' : ''}
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
			{posts.map( post =>
				<Post
					key={post.id}
					post={post}
					user={this.props.user}
					onLikePost={this.props.onLikePost}
					onApprovePost={this.props.onApprovePost}
					onRejectPost={this.props.onRejectPost}
				/>
			)}
		</div>
	}
}
