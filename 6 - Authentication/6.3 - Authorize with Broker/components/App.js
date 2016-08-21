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
    window.apiHandler = new api()
  }

  componentWillMount() {
    this.loadPosts()
    //setInterval( this.loadPosts.bind(this), 5000 )
	}

  componentDidMount() {

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
