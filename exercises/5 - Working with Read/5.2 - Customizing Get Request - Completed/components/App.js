import React from 'react'
import api from 'wordpress-rest-api-oauth-1'

const SITE_URL = 'http://awor.local/'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: []
		}
		window.api = new api({
			url: SITE_URL
		})
	}
	componentWillMount() {
		window.api.get('/wp/v2/posts')
			.then(posts => {
				this.setState({ posts })
			})
	}
	render() {
		return <ul>
			{this.state.posts.map( post => <li key={post.id}>{post.title.rendered}</li> )}
		</ul>
	}
}
