import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import Header from './Header'
import PostsList from './PostsList'
import Welcome from './Welcome'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: false,
			url: '',
			site: null
		}
	}

	onConnect(url) {
		this.setState({ url: url })

		this.api = new api({
			url: url
		})

		this.api.get( '/' )
			.then( site => this.setState( { site: site } ) )

		this.api.get( '/wp/v2/posts?_embed' )
			.then( posts => this.setState( { posts: posts } ) )
	}

	render() {
		if (!this.state.url) {
			return <Welcome onConnect={url => this.onConnect(url)} />
		}

		return <div className="app">
			<Header site={this.state.site} />

			{this.state.posts ? (
				<PostsList posts={this.state.posts} />
			) : (
				<div><p>Loading...</p></div>
			)}
		</div>
	}
}
