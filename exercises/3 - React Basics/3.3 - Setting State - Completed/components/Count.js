import React from 'react'

export default class Count extends React.Component {
	render() {
		return <span className="count">
			Count: {this.props.count}
			&nbsp;
		</span>
	}
}
