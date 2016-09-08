import React from 'react'
import api from 'wordpress-rest-api-oauth-1'

const SITE_URL = 'http://awor.local/'
const API_KEY = 'JTFiOCfq1eGE'
const API_SECRET = 'R5ZP9OEJpX0zPAYfSgCtCqisDH8eVdRlSb5W66eTDnjmlW03'
const CALLBACK_URL = 'http://localhost:3000/'
const BROKER_URL = 'http://awor.local/auth-broker/'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			items: [],
			user: null,
			title: '',
			text: '',
			isSaving: false
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
	componentWillUnmount() {
		clearInterval( this.interval )
	}
	onLogin() {
		this.api.authorize()
			.then(() => this.onLoggedIn())
			.then(() => {
				return this.interval = setInterval( () => this.loadItems(), 5000 )
			})


	}
	onLoggedIn() {
		this.loadUser()
		this.loadItems()
	}
	onLogout() {
		this.setState({ user:null })
		this.api.removeCredentials()
	}
	onCreatePost(status) {
		let post = {
			content: this.state.text,
			title: this.state.text.replace(/^(.{50}[^\s]*).*/, "$1"),
			status: status
		}
		this.api.post('/wp/v2/posts', post)
			.then(data => {
				this.onDidPublish(data)
			})
	}
	onApprovePost(post) {
		this.api.post( '/wp/v2/posts/' + post.id, { status : 'publish' } )
			.then( post => this.loadItems() )
	}
	onRejectPost(post) {
		this.api.del( '/wp/v2/posts/' + post.id )
			.then( () => this.loadItems() )
	}
	onDidPublish() {
		this.loadItems()
	}
	loadItems(){
		let args = {
			_embed: true,
			per_page: 10,
			context: this.state.user ? 'edit' : 'view',
			status: this.state.user ? 'any' : 'publish'
		}
		this.api.get('/wp/v2/posts', args)
			.then(items => this.setState({ items }))
	}
	loadUser(){
		let args = {
			_envelope: true,
			context: 'edit'
		}
		this.api.get('/wp/v2/users/me', args)
			.then(data => data.body)
			.then(user => this.setState({user}))
	}
	render() {
		console.log(this.state.items);
		return <div>
			{this.state.user ?
				<div>
				<button
					onClick={() => this.onLogout()}>
					Logout
				</button>
				<ul>
					{this.state.items.map( item => <li key={item.id} dangerouslySetInnerHTML={{__html:item.title.rendered}} /> )}
				</ul>
				<div className="PostBox">
					<textarea
						value={this.state.text}
						onChange={e => this.setState({ text: e.target.value })}
					/>
					{this.state.user && this.state.user.capabilities.publish_posts ?
							<button
								onClick={() => this.onCreatePost('publish')}>Publish
							</button>
						:
							null
					}
				</div>
				</div>
			:
				<button
					onClick={() => this.onLogin()}>
					Login
				</button>
			}
			{this.state.items.map( item => {
				<article>
					<h3
						key={item.id} dangerouslySetInnerHTML={{__html:item.title.rendered}} />
					<div
						key={item.id}
						dangerouslySetInnerHTML={{__html:item.content.rendered}} />
				</article>
			})}

		</div>

	}
}
