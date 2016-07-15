import React from 'react'

export default class PostBox extends React.Component {
	constructor() {
		super()

		this.state = {
			text: '',
		}
	}

	render() {
		return <div className="post-box">
			<textarea rows={4} onChange={e => this.setState({ text: e.target.value })} />
			<p className="actions">
				<button className="secondary" onClick={() => this.props.onSubmit(this.state.text)}>Submit for Review</button>
				<button className="primary" onClick={() => this.props.onPublish(this.state.text)}>Publish</button>
			</p>
		</div>
	}
}

PostBox.propTypes = {
	onSubmit: React.PropTypes.func.isRequired,
	onPublish: React.PropTypes.func.isRequired,
}
