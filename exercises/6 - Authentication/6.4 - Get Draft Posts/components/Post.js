import React from 'react'

export default class Post extends React.Component {
	render() {
		let { post } = this.props

		return <p>
			{post.title.rendered}
		</p>
	}
}
