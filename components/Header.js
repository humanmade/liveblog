import React from 'react'

export default class Header extends React.Component {
	render() {
		return <header className="Header">
			<img src="images/logo.png" />
			<p className="actions">
				<button className="switch-site" onClick={() => this.props.onSwitchSite()}>Switch site</button>
				{this.props.user ?
					<button className="logout" onClick={() => this.props.onLogout()}>Log out</button>
				:
					<button className="login" onClick={() => this.props.onLogin()}>Log in</button>
				}
			</p>
		</header>
	}
}

Header.propTypes = {
	onSwitchSite: React.PropTypes.func.isRequired,
	onLogin: React.PropTypes.func.isRequired,
	onLogout: React.PropTypes.func.isRequired,
}
