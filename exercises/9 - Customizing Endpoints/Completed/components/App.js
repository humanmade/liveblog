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
	componentWillUnmount() {
		clearInterval( this.interval )
	}
	onLogin() {
		this.api.authorize()
			.then(() => this.onLoggedIn())
			.then(() => {
				 this.interval = setInterval( () => this.loadItems(), 5000 )
			})
	}
	onLoggedIn() {
		this.loadUser()
	}
	onLogout() {
		this.setState({ user:null })
		this.api.removeCredentials()
	}
	/* ======= STEP 1.1 ======= */
	// Add an onLike method that accepts an item id as the parameter
	// Call api.post with a parameter of '/liveblog-likes/v1/posts/' + id + '/like'
	onLike(id) {
		this.api.post( '/liveblog-likes/v1/posts/' + id + '/like' )
			.then( () => this.loadItems() )
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
			.then(() => this.loadItems())
	}
	render() {
		return <div>
			{this.state.user ?
				<div>
					<button
						onClick={() => this.onLogout()}>
						Logout
					</button>
					<h3>Posts:</h3>
					<ul>
						{this.state.items.map( item => {
							return <li key={item.id}>
								{/*
									======= STEP 1.2 =======
									- Check that the status of post is set to publish and that item.liveblog_likes is set to a number
									- Display the item.liveblog_likes
									- Create a button that calls onLike on click and passes in the item id
								*/}
								{item.status === 'publish' && typeof item.liveblog_likes === 'number' ?
									<span>
										{item.liveblog_likes}
										<button
											style={{
												backgroundColor: 'white',
												border: 'none'
											}}
											onClick={() => this.onLike(item.id)}
										>💗</button>
									</span>
								: null }
								<span dangerouslySetInnerHTML={{__html:item.title.rendered}} />
							</li>
						})}

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
