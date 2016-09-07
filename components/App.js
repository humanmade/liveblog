import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import Header from './Header'
import PostsList from './PostsList'

const SITE_URL = 'http://awor.local/'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: [],
			isLoadingPosts: false,
		}
		window.apiHandler = new api({
			url: SITE_URL,
		})
	}
	componentWillMount() {
		this.loadPosts()
	}
	loadPosts() {
		this.setState({ isLoadingPosts: true })

		let args = {
			_embed: true,
			per_page: 100,
		}

		apiHandler.get('/wp/v2/posts', args)
			.then(posts => {
				this.setState({ posts, isLoadingPosts: false })
			})
	}
	render() {
		return <div className="app">
			<Header />
			<div className="posts">
				<PostsList posts={this.state.posts} isLoadingPosts={this.state.isLoadingPosts} />
			</div>
		</div>
	}
}
