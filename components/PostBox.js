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
		let post = {
			content: this.state.text,
			title: this.state.text.replace(/^(.{50}[^\s]*).*/, "$1"),
			status: status,
			format: 'status',
		}
		window.apiHandler.post('/wp/v2/posts', post)
			.then(data => {
				this.props.onDidPublish(data)
				this.setState({ isSaving: false, text: '' })
			})
	}

	render() {
		return <form className="PostBox">
			<div className="user-detail">
				<img src={this.props.user.avatar_urls['96']} />
				You
			</div>
			<textarea
				value={this.state.text}
				rows={4}
				onChange={e => this.setState({ text: e.target.value })}
				disabled={this.state.isSaving}
			/>
			{this.state.isSaving ?
				<p>Saving...</p>
			:
				this.props.user.capabilities.publish_posts ?
					<p className="actions">
						<button className="secondary" onClick={() => this.onCreatePost('pending')}>Submit for review</button>
						<button className="primary" onClick={() => this.onCreatePost('publish')}>Publish</button>
					</p>
				:
					<p className="actions">
						<button className="primary" onClick={() => this.onCreatePost('pending')}>Submit for review</button>
					</p>
			}
		</form>
	}
}

PostBox.propTypes = {
	onDidPublish: React.PropTypes.func.isRequired,
	user: React.PropTypes.object.isRequired,
}
