import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = 'http://awor.local/'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: []
		}
		window.apiHandler = new api({
			url: SITE_URL
		})
	}

	componentWillMount() {
		this.loadPosts();
		setInterval( this.loadPosts.bind(this), 5000 )
	}

	loadPosts() {

		let args = {
			_embed: true,
			per_page: 100
		}

		apiHandler.get('/wp/v2/posts', args)
			.then(posts => {
				this.setState({ posts })
			})
	}

	render() {

		return <PostList
			posts={this.state.posts}
		/>

	}
}
