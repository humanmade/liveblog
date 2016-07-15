import React from 'react'
import PostBox from './PostBox'

export default class Header extends React.Component {
	constructor() {
		super()
		this.state = {
			user: null,
			sort: 'date',
			filter: 'all',
		}
	}

	render() {
		return <header>
			<h1>
				{this.props.site ? this.props.site.name : null}
			</h1>
			{ this.state.user ? (
				<div>
					<p className="actions">
						<button className="primary" onClick={() => this.setState({ user: false })}>Log out</button>
					</p>
					<PostBox />
				</div>
			) : (
				<p className="actions">
					<button className="primary" onClick={() => this.setState({ user: true })}>Log in</button>
				</p>
			)}

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
		</header>
	}
}
