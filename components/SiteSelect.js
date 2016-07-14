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

	onSubmit() {
		console.log(this.state.url)
	}

	render() {
		return <div className="site-select">
			<input value={this.state.url} onChange={e => this.onChange(e)} />
			<button
				className="primary"
				onClick={() => this.props.onConnect(this.state.url)}
			>Connect</button>
		</div>
	}
}
SiteSelect.propTypes = {
	onConnect: React.PropTypes.func.isRequired,
}
