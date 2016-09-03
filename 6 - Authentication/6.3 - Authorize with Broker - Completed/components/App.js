import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = 'https://demo.wp-api.org/'
const API_KEY = 'JO4vWNuOLE1u'
const API_SECRET = 'h16KOhgBIvGbBJajxhGTrXGwx3CX2pYxulOcPZEjzZ6y2Ccn'
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
					secret: API_SECRET
				}
			},
			callbackURL: CALLBACK_URL
		})

	}

	onLoggedIn() {
		this.loadPosts()
	}

	componentWillMount() {
		window.apiHandler.authorize().then(() => this.onLoggedIn())
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
