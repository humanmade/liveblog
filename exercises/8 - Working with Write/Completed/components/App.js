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
		/* ======= STEP 1.1 ======= */
		// Add title to state		
		this.state = {
			items: [],
			user: null,
			title: '',
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
	/* ======= STEP 1.3 ======= */
	// Create an onSave method that accepts a parameter of status
	// Create an item variable and set the title from state and the status from the parameter
	// Call api.post and pass it the item as the second parameter
	// Use a promise to set state for title back to empty string and call loadItems()
	onSave(status) {
		let post = {
			title: this.state.title,
			status: status
		}
		console.log( post );
		this.api.post('/wp/v2/posts', post)
			.then(() => {
				this.setState({title: ''})
				this.loadItems()
			})
	}
	/* ======= STEP 2.2 ======= */
	// Create a new method called onApprove that accepts an id as a parameter
	// Call api.post and append id to the end of '/wp/v2/posts/'
	// As a second parameter pass an object with a status property set to publish
	// Then use a promise to load the items again
	onApprove(id) {
		this.api.post( '/wp/v2/posts/' + id, { status : 'publish' } )
			.then( post => this.loadItems() )

	}
	/* ======= STEP 2.3 ======= */
	// Create a new method called onReject that accepts id as a parameter
	// Call api.del and append the id to the end of '/wp/v2/posts/'
	// Then use a promise to load the items
	onReject(id) {
		this.api.del( '/wp/v2/posts/' + id )
			.then( post => this.loadItems() )
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
		return <div>
			{this.state.user ?
				<div>
					<button
						onClick={() => this.onLogout()}>
						Logout
					</button>
					<hr />
					<form className="PostBox">
						<input
							value={this.state.title}
							onChange={e => this.setState({title: e.target.value })} />
						{' '}
						{/*
						======= STEP 1.2 =======
						// Create an opening and closing form tag
						// Create an input field with a value equal to the title from state
						// Attach an onChange event handler and update the state of title with e.target.value
						// Create a button to "Save Draft" and have it call onSave with the parameter of pending when clicked
						// Create a button to "Publish" and have it call onSave with the parameter of publish when clicked
						*/}
						<button
							onClick={() => this.onSave('pending')}
						>Save Draft</button>
						{' '}
						<button
							onClick={() => this.onSave('publish')}
						>Publish</button>
					</form>
					<ul>
						{this.state.items.map( item => {
							return <li key={item.id}>
								<span dangerouslySetInnerHTML={{__html:item.title.rendered}} />
								{' '}
								{/*
								======= STEP 2.1 =======
								// Write a ternary conditional checking if item status is equal to pending
								// Create two buttons
								// Have one button call onApprove on click and pass the item.id
								// Have the other button call onReject on click and pass the item id as well
								*/}
								{item.status === 'pending' ?
									<span>
										<button
											style={{backgroundColor: 'white', border: 'none'}}
											onClick={() => this.onApprove(item.id)}
										>👍</button>
										<button
											style={{backgroundColor: 'white', border: 'none'}}
											onClick={() => this.onReject(item.id)}
										>👎</button>
									</span>
								:
									null
								}

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
