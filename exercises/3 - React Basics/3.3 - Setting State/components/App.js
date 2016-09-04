import React from 'react'
import PostList from './PostList'

export default class App extends React.Component {
	refreshPosts() {
		console.log( 'Posts updated' );
	}

	render() {
		let posts = [
			{
				id: 1,
				title: 'Hello WP',
			},
			{
				id: 2,
				title: 'Hello JS',
			}
		]
		return <PostList
			posts={this.state.posts}
			refreshPosts={() => this.refreshPosts()}
		/>
	}
}
