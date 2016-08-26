import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import Header from './Header'
import PostsList from './PostsList'
import PostBox from './PostBox'

const SITE_URL = 'https://aweekofrest.hm/liveblog/'
const API_KEY = 'VTZlBw9i1CAx'
const API_SECRET = 'yyPrRjuPqz0C7feU4GlGn6yFJOskqj4jvYBCGUxICBOGFxTK'
const CALLBACK_URL = 'http://localhost:3000/'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: [],
			isLoadingPosts: false,
			user: null,
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
		window.apiHandler.restoreCredentials()

		if ( window.apiHandler.hasCredentials() ) {
			this.onLoggedIn()
		} else if ( window.apiHandler.hasRequestToken() ) {
			this.onLogin()
		}
	}
	componentWillMount() {
		this.loadPosts()
	}
	loadPosts() {
		let args = {
			_embed: true,
			per_page: 100,
			context: this.state.user ? 'edit' : 'view',
			status: this.state.user ? 'any' : 'publish',
		}

		apiHandler.get('/wp/v2/posts', args)
			.then(posts => {
				posts = posts.map(post => {
					if (!post.status) {
						post.status = "publish"
					}
					return post
			})
				this.setState({ posts })
			})
	}
	onLikePost(post) {
		window.apiHandler.post( '/liveblog-likes/v1/posts/' + post.id + '/like' )
			.then( response => {
				this.setState({
					posts: this.state.posts.map( p => {
						p.id === post.id ? p.liveblog_likes = response.count : null
						return p
					} )
				})
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
	onApprovePost(post) {
		window.apiHandler.post( '/wp/v2/posts/' + post.id, { status : 'publish' } )
			.then( post => this.loadPosts() )
	}
	onRejectPost(post) {
		window.apiHandler.del( '/wp/v2/posts/' + post.id )
			.then( () => this.loadPosts() )
	}
	render() {
		return <div className="app">
			<Header
				user={this.state.user}
				onLogin={() => this.onLogin()}
				onLogout={() => this.onLogout()}
			/>
			<div className="posts">
				{this.state.user && this.state.user.capabilities.edit_posts ?
					<PostBox
						onDidPublish={() => this.loadPosts()}
						user={this.state.user}
					/>
				: null}
				<PostsList
					posts={this.state.posts}
					showFilter={this.state.user}
					user={this.state.user}
					onApprovePost={post => this.onApprovePost(post)}
					onRejectPost={post => this.onRejectPost(post)}
					onLikePost={post => this.onLikePost(post)}
				/>
			</div>
		</div>
	}
}
