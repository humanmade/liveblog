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
						<button className="secondary" onClick={() => this.props.onSwitchSite()}>Switch site</button>
						<button className="primary" onClick={() => this.props.onLogout()}>Log out</button>
					</p>
					<PostBox onDidPublish={this.props.onDidPublish} />
				</div>
			) : (
				<p className="actions">
					<button className="secondary" onClick={() => this.props.onSwitchSite()}>Switch site</button>
					<button className="primary" onClick={() => this.props.onLogin()}>Log in</button>
				</p>
			)}
		</header>
	}
}

Header.propTypes = {
	onSwitchSite: React.PropTypes.func.isRequired,
	onLogin: React.PropTypes.func.isRequired,
	onLogout: React.PropTypes.func.isRequired,
	onDidPublish: React.PropTypes.func.isRequired,
}
