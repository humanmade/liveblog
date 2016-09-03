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
			posts: [],
			user: null
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

	onLogin() {
		window.apiHandler.authorize().then(() => this.onLoggedIn())		
	}

	onLoggedIn() {
		window.apiHandler.get('/wp/v2/users/me', {_envelope: true, context: 'edit'})
			.then(data => data.body)
			.then(user => this.setState({ user }))
			.then(() => this.loadPosts() )
	}

	onLogout() {
		this.setState({ user:null })
		window.apiHandler.removeCredentials()
	}

	loadPosts() {

		let args = {
			_embed: true,
			per_page: 10,
			context: this.state.user ? 'edit' : 'view',
			status: this.state.user ? 'any' : 'publish'
		}

		apiHandler.get('/wp/v2/posts', args)
			.then(posts => {
				this.setState({ posts })
			})
	}

	render() {

		return <PostList
			user={this.state.user}
			onLogin={() => this.onLogin()}
			onLogout={() => this.onLogout()}
			posts={this.state.posts}
		/>

	}
}
