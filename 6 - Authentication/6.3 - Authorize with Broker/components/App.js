import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = '',
      API_KEY = '',
      API_SECRET = '',
      CALLBACK_URL = ''

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
  }

  componentWillMount() {
    this.loadPosts()
    setInterval( this.loadPosts.bind(this), 5000 )
	}

  componentDidMount() {
    window.apiHandler.authorize().then(() => this.onLoggedIn())
  }

	onLoggedIn() {
		window.apiHandler.get('/wp/v2/users/me', {_envelope: true, context: 'edit'})
			.then(data => data.body)
      .then(console.log('Authorized'))
			.then(() => this.loadPosts() )
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
