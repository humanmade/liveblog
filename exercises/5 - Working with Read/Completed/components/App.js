import React from 'react'
import api from 'wordpress-rest-api-oauth-1'

/* ======= STEP 1.1 ======= */
const SITE_URL = 'http://awor.local/'

export default class App extends React.Component {
	constructor() {
		super()
		/* ======= STEP 1.2 ======= */
		// Set state for items to empty array
		// Create a new api instance as this.api
		this.state = {
			items: []
		}
		this.api = new api({url: SITE_URL})
	}
	componentWillMount() {
		/* ======= STEP 1.3 ======= */
		// Call api.get
		// Use .then to set the state with the new items
		/* ======= STEP 2.1 ======= */
		// Set args above the api.get call
		// Assign _embed to true and per_page to 100
		// Pass args as second parameter to api.get()
		// Play around with other parameters
		// (http://v2.wp-api.org/reference/posts/)
		/* ======= STEP 3.2 ======= */
		// Call the loadItems method
		// Setup a timer to loadItems every 5 seconds
		// Make sure to bind 'this' to the loadItems call
		this.loadItems()
		setInterval(
			this.loadItems.bind(this)
		)

	}
	/* ======= STEP 3.1 ======= */
	// Move the api.get() call out of componentWillMount
	// Move api.get() into a custom method called loadItems
	loadItems(){
		let args = {
			_embed: true,
			per_page: 100
		}
		this.api.get('/wp/v2/posts')
			.then(items => {
				this.setState({ items })
			})
	}
	render() {
		/* ======= STEP 1.4 ======= */
		// Map through the items
		// Display the item titles in an unordered list
		return <ul>
			{this.state.items.map( item => <li key={item.id}>{item.title.rendered}</li> )}
		</ul>
	}
}
