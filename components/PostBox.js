import React from 'react'

export default class PostBox extends React.Component {
	constructor() {
		super()

		this.state = {
			text: '',
			isSaving: false,
		}
	}

	onCreatePost(status) {
		this.setState({isSaving:true})
		window.apiHandler.post('/wp/v2/posts', { content: this.state.text, status: status })
			.then(data => {
				this.props.onDidPublish(data)
				this.setState({ isSaving: false, text: '' })
			})
	}

	render() {
		return <div className="post-box">
			<textarea
				value={this.state.text}
				rows={4}
				onChange={e => this.setState({ text: e.target.value })}
				disabled={this.state.isSaving}
			/>
			{this.state.isSaving ?
				<p>Saving...</p>
			:
				<p className="actions">
					<button className="secondary" onClick={() => this.onCreatePost('pending')}>Submit for Review</button>
					<button className="primary" onClick={() => this.onCreatePost('publish')}>Publish</button>
				</p>
			}
		</div>
	}
}

PostBox.propTypes = {
	onDidPublish: React.PropTypes.func.isRequired,
}
