import React from 'react'
import RichTextEditor from 'react-rte-image'

export default class PostBox extends React.Component {
	constructor() {
		super()

		this.state = {
			text: RichTextEditor.createEmptyValue(),
			isSaving: false,
		}
	}

	onCreatePost(status) {
		this.setState({isSaving:true})
		let text = this.state.text.toString('html')
		let post = {
			content: text,
			title: text.replace(/^(.{50}[^\s]*).*/, "$1"),
			status: status,
			categories: [ this.props.category.id ],
			format: 'status',
		}
		window.apiHandler.post('/wp/v2/posts', post)
			.then(data => {
				this.props.onDidPublish(data)
				this.setState({ isSaving: false, text: RichTextEditor.createEmptyValue() })
			})
	}

	render() {
		return <form className="PostBox">
			<div className="user-detail">
				<img src={this.props.user.avatar_urls['96']} />
				You
			</div>
			<div className="editor">
				<RichTextEditor
					value={this.state.text}
					onChange={value => this.setState({ text: value })}
				/>
			</div>
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
	category: React.PropTypes.object.isRequired,
	user: React.PropTypes.object.isRequired,
}
