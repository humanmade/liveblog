import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostBox from './PostBox'
import PostList from './PostList'

const SITE_URL = 'http://wp-api.webhostingforstudents.com/',
	API_KEY = 'dLCyNqgXAUfl',
	API_SECRET = '0h3z9muv7pkcRULquE6VkSAXjYY443VFVyUVwfuDg6IOvfp0',
	CALLBACK_URL = 'http://localhost:3000/'

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
		window.apiHandler.restoreCredentials()

		if ( window.apiHandler.hasCredentials() ) {
			this.onLoggedIn()
		} else if ( window.apiHandler.hasRequestToken() ) {
			this.onLogin()
		}
	}

	componentWillMount() {
		this.loadPosts()
		//setInterval( this.loadPosts.bind(this), 5000 )
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

	onApprovePost(post) {
		window.apiHandler.post( '/wp/v2/posts/' + post.id, { status : 'publish' } )
			.then( post => this.loadPosts() )
	}

	onRejectPost(post) {
		window.apiHandler.del( '/wp/v2/posts/' + post.id )
			.then( () => this.loadPosts() )
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

		return <div className="app">
			<PostBox
				onDidPublish={() => this.loadPosts()}
				user={this.state.user}
			/>
			<PostList
				onApprovePost={() => this.onApprovePost()}
				onRejectPost={() => this.onRejectPost()}
				onLogin={() => this.onLogin()}
				onLogout={() => this.onLogout()}
				posts={this.state.posts}
				user={this.state.user}
			/>
		</div>

	}
}
