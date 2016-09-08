import React from 'react'
import api from 'wordpress-rest-api-oauth-1'

/* ======= STEP 1.1 ======= */
// Assign proper values the constants below
const SITE_URL = 'http://awor.local/'
const API_KEY = 'JTFiOCfq1eGE'
const API_SECRET = 'R5ZP9OEJpX0zPAYfSgCtCqisDH8eVdRlSb5W66eTDnjmlW03'
const CALLBACK_URL = 'http://localhost:3000/'
const BROKER_URL = 'http://awor.local/auth-broker/'

export default class App extends React.Component {
	constructor() {
		super()
		/* ======= STEP 3.1 ======= */
		// Add a user to state and set to null
		this.state = {
			items: [],
			user: null
		}
		/* ======= STEP 1.2 ======= */
		// Set the values for brokerURL, brokerCredentials and the callbackURL properties
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

	}
	componentWillMount() {
		/* ======= STEP 1.3 ======= */
		// Call api.authorize
		// Use promise to load items
		/* ======= STEP 3.X ======= */
		// Remove the login call
	}
	componentWillUnmount() { clearInterval( this.interval ) }
	loadItems(){
		/* ======= STEP 2.1 ======= */
		// Try pulling in pending or draft posts
		let args = {
			_embed: true,
			per_page: 10
		}
		this.api.get('/wp/v2/posts', args)
			.then(items => this.setState({ items }))
	}
	/* ======= STEP 3.2 ======= */
	// Create a new method called loadUser
	// Set the _envolope argument to true and context to edit
	// Call api.get on '/wp/v2/users/me'
	// Use a promise to get the data body
	// Use a promise to set the user state
	loadUser(){
		let args = {
			_envelope: true
		}
		this.api.get('/wp/v2/users/me', args)
			.then(data => data.body)
			.then(user => this.setState({user}))
	}

	/* ======= STEP 3.1 ======= */
	// Move the api.authorize() call into a new method named login
	// Move the code for reloading posts every 5 seconds into login()
	/* ======= STEP 3.3 ======= */
	// Use a promise before loadItems to loadUser
	login() {
		this.api.authorize()
			.then(() => this.loadUser())
			.then(() => this.loadItems())
		this.interval = setInterval(() => {this.loadItems()},5000)
	}
	/* ======= STEP 3.4 ======= */
	// Create a logout method that sets the state for user to null
	// run api.removeCredentials()
	logout() {
		this.setState({user:null})
		this.api.removeCredentials()
	}

	render() {
		/* ======= STEP 3.5 ======= */
		// Use a terninary operator that loads a login button if user state is set
		// Load a logout button and list of posts if user is set
		// Connect the login and logout methods to the correct button
		return <div>
			{this.state.user ?
				<div>
					<button
						onClick={() => this.logout()}>
						Logout
					</button>
					<ul>
						{this.state.items.map( item => <li key={item.id} dangerouslySetInnerHTML={{__html:item.title.rendered}} /> )}
					</ul>
				</div>
			:
				<button
					onClick={() => this.login()}>
					Login
				</button>
			}


		</div>
	}
}
