import React from 'react'
import SiteSelect from './SiteSelect'

export default class Welcome extends React.Component {
	render() {
		return <div className="app welcome">
			<div className="branding">
				<img src="https://placehold.it/300x300" />
				<h1>Liveblog</h1>
			</div>
			<SiteSelect onConnect={this.props.onConnect} />
			<div>
				<p>Welcome to Liveblog. To get started, enter your site URL above.</p>
			</div>
		</div>
	}
}
Welcome.propTypes = {
	onConnect: React.PropTypes.func.isRequired,
}
