import React from 'react'

export default class Welcome extends React.Component {
	constructor() {
		super()
		this.state = {
			url: ''
		}
	}
	onChange(e) {
		let input = e.target
		this.setState({
			url: input.value
		})
	}
	render() {
		return <div className="app Welcome">
			<div className="branding">
				<img src="images/logo.png" />
			</div>
			<p>Welcome to LiveBlog, let's get started!</p>
			<form
					className="site-select"
					onSubmit={e => {e.preventDefault(); this.props.onConnect(this.state.url)}}
					>
				<input
					type="url"
					required
					value={this.state.url}
					onChange={e => this.onChange(e)}
					placeholder="Your site URL"
				/>
				<button
					className="primary"
				>Connect</button>
			</form>
		</div>
	}
}
Welcome.propTypes = {
	onConnect: React.PropTypes.func.isRequired,
}
