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
							className={ this.state.filter == 'all' ? 'active' : ''}
							onClick={() => this.setState({ filter: 'all' })}
						>All</a>
						<a
							className={ this.state.filter == 'pending' ? 'active' : ''}
							onClick={() => this.setState({ filter: 'pending' })}
						>Pending</a>
					</span>
				: null}
			</p>
			{posts.map( post =>
				<Post
					key={post.id}
					post={post}
					user={this.props.user}
					onApprovePost={this.props.onApprovePost}
					onRejectPost={this.props.onRejectPost}
				/>
			)}
		</div>
	}
}
