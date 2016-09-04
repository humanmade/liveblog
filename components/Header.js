import React from 'react'

export default class Header extends React.Component {
	render() {
		return <header className="Header">
			<img src="images/logo.png" />
			<p className="actions">
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
	onLogin: React.PropTypes.func.isRequired,
	onLogout: React.PropTypes.func.isRequired,
	user: React.PropTypes.object,
}
