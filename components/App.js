import React from 'react'
import Header from './Header'
import PostsList from './PostsList'
import Welcome from './Welcome'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: [],
			url: ''
		}
	}

	onConnect(url) {
		this.setState({ url: url })

		fetch( url + '/wp-json/wp/v2/posts?_embed', { credentials: "include" } )
			.then( response => response.json() )
			.then( posts => this.setState( { posts: posts } ) )
	}

	render() {
		if (!this.state.url) {
			return <Welcome onConnect={url => this.onConnect(url)} />
		}

		return <div className="app">
			<Header />
			<PostsList posts={this.state.posts} />
		</div>
	}
}
