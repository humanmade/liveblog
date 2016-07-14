import React from 'react'

export default class PostBox extends React.Component {
	render() {
		return <div className="post-box">
			<textarea rows={4} />
			<p className="actions">
				<button>Submit for Review</button>
				<button>Publish</button>
			</p>
		</div>
	}
}