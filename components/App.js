import React from 'react'
import Header from './Header'
import PostsList from './PostsList'
import Data from '../data'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			posts: Data
		}
	}
	render() {
		return <div className="app">
			<Header />
			<div className="posts">
				<PostsList posts={this.state.posts} />
			</div>
		</div>
	}
}
