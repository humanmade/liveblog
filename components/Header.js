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
			<h1>My Live Blog</h1>
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
		</header>
	}
}
