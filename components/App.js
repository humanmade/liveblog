import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import Header from './Header'
import PostsList from './PostsList'
import Welcome from './Welcome'

const API_KEY = 'wMa5iV8tJII5'
const API_SECRET = 'a8xu7QZVBRZStXaWz6ewcL9C2NmUOX8F1C0V99YUD2FkoaS5'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: [],
			url: '',
			site: null,
			user: null,
		}
	}

	componentWillMount() {
		let url = window.localStorage.getItem( 'url' )
		if ( url ) {
			this.onConnect(url)
		}
	}

	onConnect(url) {
		this.setState({ url: url })
		window.localStorage.setItem( 'url', url )

		let apiHandler = window.apiHandler = new api({
			url: url,
			brokerURL: 'https://apps.wp-api.org/',
			brokerCredentials: {
				client: {
					public: API_KEY,
					secret: API_SECRET,
				},
			},
			callbackURL: window.location,
		})

		apiHandler.get('/')
			.then(site => this.setState({ site: site }))

		apiHandler.get('/wp/v2/posts', {_embed: true})
			.then(posts => this.setState({ posts: posts }))
	}

	onLogin() {
		window.apiHandler.restoreCredentials().authorize().then( () => {
			apiHandler.saveCredentials()

			apiHandler.get( '/' )
				.then(site => this.setState({ site }))

			apiHandler.get('/wp/v2/users/me', {_envelope: true})
				.then(data => data.body)
				.then(user => this.setState({ user }))

			apiHandler.get('/wp/v2/posts', {_embed: true, context: "edit", status: "any"})
				.then(posts => this.setState({ posts }))
		})
	}

	render() {
		if (!this.state.url) {
			return <Welcome onConnect={url => this.onConnect(url)} />
		}

		return <div className="app">
			<Header site={this.state.site} user={this.state.user} onLogin={() => this.onLogin()} />

			{this.state.posts ? (
				<PostsList posts={this.state.posts} />
			) : (
				<div><p>Loading...</p></div>
			)}
		</div>
	}
}
