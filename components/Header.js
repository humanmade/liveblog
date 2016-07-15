import React from 'react'
import PostBox from './PostBox'

export default class Header extends React.Component {
	render() {
		return <header>
			<h1>
				{this.props.site ? this.props.site.name : null}
			</h1>
			{ this.props.user ? (
				<div>
					<p className="actions">
						<button className="primary" onClick={() => this.setState({ user: false })}>Log out</button>
					</p>
					<PostBox />
				</div>
			) : (
				<p className="actions">
					<button className="primary" onClick={() => this.props.onLogin()}>Log in</button>
				</p>
			)}
		</header>
	}
}

Header.propTypes = {
	onLogin: React.PropTypes.func.isRequired,
}
