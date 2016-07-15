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

		this.loadPosts()
	}

	onLogin() {
		window.apiHandler.restoreCredentials().authorize().then( () => {
			apiHandler.saveCredentials()

			apiHandler.get( '/' )
				.then(site => this.setState({ site }))

			apiHandler.get('/wp/v2/users/me', {_envelope: true})
				.then(data => data.body)
				.then(user => this.setState({ user }))
				.then(() => this.loadPosts())
		})
	}

	onLogout() {
		this.setState({ user:null })
		window.apiHandler.removeCredentials()
	}

	onCreatePost(data) {
		window.apiHandler.post('/wp/v2/posts', data)
			.then(() => this.loadPosts())
	}

	onLikePost(post) {
		this.setState({liked: true})
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

	onApprovePost(post) {
		window.apiHandler.post( '/wp/v2/posts/' + post.id, { status : 'publish' } )
			.then( post => {
				this.setState({
					posts: this.state.posts.map( p => {
						if ( p.id === post.id ) {
							p.status = post.status
						}
						return p
					} )
				})
			})
	}

	onRejectPost(post) {
		window.apiHandler.del( '/wp/v2/posts/' + post.id )
			.then( () => this.setState({posts:this.state.posts.filter( p => p.id !== post.id)}))
	}

	loadPosts() {
		let args = {_embed: true}
		if (this.state.user) {
			args.context = "edit"
			args.status = "any"
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

	render() {
		if (!this.state.url) {
			return <Welcome onConnect={url => this.onConnect(url)} />
		}

		return <div className="app">
			<Header
				site={this.state.site}
				user={this.state.user}
				onLogin={() => this.onLogin()}
				onLogout={() => this.onLogout()}
				onSubmit={text => this.onCreatePost({ status: "draft", content: text })}
				onPublish={text => this.onCreatePost({ status: "publish", content: text })}
			/>

			{this.state.posts ? (
				<PostsList
					posts={this.state.posts}
					onLikePost={this.onLikePost.bind(this)}
					onApprovePost={this.onApprovePost.bind(this)}
					onRejectPost={this.onRejectPost.bind(this)}
				/>
			) : (
				<div><p>Loading...</p></div>
			)}
		</div>
	}
}
