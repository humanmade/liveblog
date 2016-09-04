import React from 'react'
import PostList from './PostList'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: [
				{
					id: 1,
					title: 'Hello WP',
				},
				{
					id: 2,
					title: 'Hello JS',
				},
				{
					id: 3,
					title: 'Hello React',
				}
			]
		}
	}

	refreshPosts() {
		console.log( 'Posts updated' );
	}

	render() {
		return <PostList
			posts={this.state.posts}
			refreshPosts={() => this.refreshPosts()}
		/>
	}
}
