import React from 'react'

export default class Post extends React.Component {
	render() {
		return <div>
			{this.props.children}
		</div>
	}
}
