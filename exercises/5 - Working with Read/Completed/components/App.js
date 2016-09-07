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
		// Setup a timer to loadItems every 5 seconds and assign it to this.interval
		// Make sure to bind 'this' to the loadItems call
		this.loadItems()
		this.interval = setInterval(
			this.loadItems.bind(this),
			5000
		)

	}
	/* ======= STEP 3.3 ======= */
	// Add a componentWillUnmout method
	// Use clearInterval to clear out this.interval
	componentWillUnmount() {
		clearInterval( this.interval )
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
		// Convert to using dangerouslySetInnerHTML
		return <ul>
			{this.state.items.map( item => <li key={item.id} dangerouslySetInnerHTML={{__html:item.title.rendered}} /> )}
		</ul>
	}
}
