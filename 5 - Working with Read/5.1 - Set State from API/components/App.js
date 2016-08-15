import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = 'http://www.example.dev/'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentWillMount() {

	}

  loadPosts() {

    let args = {
		}

    apiHandler.get('/wp/v2/posts', args)
      .then(

      )
  }

  render() {

    return <PostList
      posts={this.state.posts}
    />

  }


}
