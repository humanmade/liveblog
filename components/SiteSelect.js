import React from 'react'

export default class SiteSelect extends React.Component {
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
		return <form
				className="site-select"
				onSubmit={() => this.props.onConnect(this.state.url)}
				>
			<input type="url" value={this.state.url} onChange={e => this.onChange(e)} />
			<button
				className="primary"
			>Connect</button>
		</form>
	}
}
SiteSelect.propTypes = {
	onConnect: React.PropTypes.func.isRequired,
}
