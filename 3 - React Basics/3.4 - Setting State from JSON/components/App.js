import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import PostList from './PostList'

const SITE_URL = ''

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentWillMount() {

	}

  render() {

    return <PostList
      posts={this.state.posts}
    />

  }


}
