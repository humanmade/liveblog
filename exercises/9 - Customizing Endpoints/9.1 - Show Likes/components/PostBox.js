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
		let post = {
			content: this.state.text,
			title: this.state.text.replace(/^(.{50}[^\s]*).*/, "$1"),
		}
		window.apiHandler.post('/wp/v2/posts', post)
			.then(data => {
				this.props.onDidPublish(data)
			})
	}

	render() {
		return <form className="PostBox">
			<textarea
				value={this.state.text}
				onChange={e => this.setState({ text: e.target.value })}
			/>
			{this.props.user.capabilities.publish_posts ?
						<button onClick={() => this.onCreatePost('publish')}>Publish</button>
				:
			}
		</form>
	}
}
