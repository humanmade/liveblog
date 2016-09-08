import React from 'react'
import api from 'wordpress-rest-api-oauth-1'

const SITE_URL = 'http://awor.local/'
const API_KEY = 'JTFiOCfq1eGE'
const API_SECRET = 'R5ZP9OEJpX0zPAYfSgCtCqisDH8eVdRlSb5W66eTDnjmlW03'
const CALLBACK_URL = 'http://localhost:3000/'
const BROKER_URL = 'http://awor.local/auth-broker/'
// title: '',
// text: '',
// isSaving: false

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			items: [],
			user: null,
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
	// onCreatePost
	// onApprovePost
	// onRejectPost
	// onDidPublish
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
				</div>
			:
				<button
					onClick={() => this.onLogin()}>
					Login
				</button>
			}
		</div>

	}
}
