import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import Header from './Header'
import PostsList from './PostsList'

const SITE_URL = 'http://wordpress.dev/'
const API_KEY = 'OyO4rHs3jHq4'
const API_SECRET = 'veTc8srXFJr0GoXaLmz2rt0pHgSkf0EUP9itKPpdWg7Evfgt'
const CALLBACK_URL = 'http://localhost:3000/'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: []
		}
		window.apiHandler = new api({
			url: SITE_URL,
			brokerCredentials: {
				client: {
					public: API_KEY,
					secret: API_SECRET,
				},
			},
			callbackURL: CALLBACK_URL,
		})
	}
	componentWillMount() {
		this.loadPosts()
	}
	loadPosts() {
		let args = {
			_embed: true,
			per_page: 100,
		}

		apiHandler.get('/wp/v2/posts', args)
			.then(posts => {
				this.setState({ posts })
			})
	}
	render() {
		return <div className="app">
			<Header />
			<div className="posts">
				<PostsList posts={this.state.posts} />
			</div>
		</div>
	}
}
