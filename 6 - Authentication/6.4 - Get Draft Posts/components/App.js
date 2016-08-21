import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = 'http://wp-api.webhostingforstudents.com/',
      API_KEY = 'dLCyNqgXAUfl',
      API_SECRET = '0h3z9muv7pkcRULquE6VkSAXjYY443VFVyUVwfuDg6IOvfp0',
      CALLBACK_URL = 'http://localhost:3000/'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
    window.apiHandler = new api({
      url: SITE_URL,
      brokerCredentials: {
        client: {
          public: API_KEY,
          secret: API_SECRET
        }
      },
      callbackURL: CALLBACK_URL
    })
		window.apiHandler.restoreCredentials()

		if ( window.apiHandler.hasCredentials() ) {
			this.onLoggedIn()
		} else if ( window.apiHandler.hasRequestToken() ) {
			this.onLogin()
		}
  }

  componentWillMount() {
    this.loadPosts()
    //setInterval( this.loadPosts.bind(this), 5000 )
	}

  onLogin() {
    window.apiHandler.authorize().then(() => this.onLoggedIn())
  }

	onLoggedIn() {
    console.log( "Logged In" )
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
