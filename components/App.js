import React from 'react'
import PostsList from './PostsList'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: [],
		}

		this.loadPosts()
	}

	loadPosts() {
		fetch( 'https://demo.wp-api.org/wp-json/wp/v2/posts?_embed', { credentials: "include" } )
			.then( response => response.json() )
			.then( posts => this.setState( { posts: posts } ) )
	}

	render() {
		return <div className="app">
			<PostsList posts={this.state.posts} />
		</div>
	}
}
