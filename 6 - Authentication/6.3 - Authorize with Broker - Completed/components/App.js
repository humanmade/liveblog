import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = 'http://awor.local/'
const API_KEY = 'JTFiOCfq1eGE'
const API_SECRET = 'R5ZP9OEJpX0zPAYfSgCtCqisDH8eVdRlSb5W66eTDnjmlW03'
const CALLBACK_URL = 'http://localhost:3000/'
const BROKER_URL = 'http://awor.local/auth-broker/'

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			posts: []
		}
		window.apiHandler = new api({
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

	onLoggedIn() {
		this.loadPosts()
	}

	componentWillMount() {
		window.apiHandler.authorize().then(() => this.onLoggedIn())
	}

	loadPosts() {
		let args = {
			_embed: true,
			per_page: 100
		}

		apiHandler.get('/wp/v2/posts', args)
			.then(posts => {
				this.setState({ posts })
			})
	}

	render() {
		return <PostList
			posts={this.state.posts}
		/>
	}
}
