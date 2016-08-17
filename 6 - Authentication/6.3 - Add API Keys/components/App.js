import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = 'http://www.example.dev/',
      API_KEY = 'o3dmEub5xz6R',
      API_SECRET = 'IUcToKMV3hkpEFoJ6EdQETyE3jrcLTacnHRvb2yEICVlxuLW',
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
    this.loadPosts();
    //setInterval( this.loadPosts.bind(this), 5000 )
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

  onLogin() {
      window.apiHandler.authorize()
  }

  onLoggedIn() {
		window.apiHandler.get('/wp/v2/users/me', {_envelope: true, context: 'edit'})
			.then(data => data.body)
			.then(() => this.loadPosts() )
	}

  render() {

    return <PostList
      onLogin={() => this.onLogin()}
      posts={this.state.posts}
    />

  }


}
