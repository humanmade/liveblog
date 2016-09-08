import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = 'http://awor.local/'
const API_KEY = 'JTFiOCfq1eGE'
const API_SECRET = 'R5ZP9OEJpX0zPAYfSgCtCqisDH8eVdRlSb5W66eTDnjmlW03'
const CALLBACK_URL = 'http://localhost:3000/'
const BROKER_URL = 'http://awor.local/auth-broker/'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: [],
			user: null
		}
		this.api = new api({
			url: SITE_URL,
			brokerURL: BROKER_URL,
			brokerCredentials: {
				client: {
					public: API_KEY,
					secret: API_SECRET
				}
			},
			callbackURL: CALLBACK_URL
		})
		this.api.restoreCredentials()

		if ( this.api.hasCredentials() ) {
			this.onLoggedIn()
		} else if ( this.api.hasRequestToken() ) {
			this.onLogin()
		}
	}

	componentWillMount() {
		this.loadPosts()
		//setInterval( this.loadPosts.bind(this), 5000 )
	}

	onLogin() {
		this.api.authorize().then(() => this.onLoggedIn())
	}

	onLoggedIn() {
		this.api.get('/wp/v2/users/me', {_envelope: true, context: 'edit'})
			.then(data => data.body)
			.then(user => this.setState({ user }))
			.then(() => this.loadPosts() )
	}

	onLogout() {
		this.setState({ user:null })
		this.api.removeCredentials()
	}

	loadPosts() {

		let args = {
			_embed: true,
			per_page: 100,
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
			onLogin={() => this.onLogin()}
			onLogout={() => this.onLogout()}
			posts={this.state.posts}
		/>

	}
}
