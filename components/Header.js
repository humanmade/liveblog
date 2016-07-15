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
						<button className="primary" onClick={() => this.props.onLogout()}>Log out</button>
					</p>
					<PostBox onSubmit={this.props.onSubmit} onPublish={this.props.onPublish} />
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
	onLogout: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired,
	onPublish: React.PropTypes.func.isRequired,
}
