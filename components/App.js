import React from 'react'
import Header from './Header'
import PostsList from './PostsList'

export default class App extends React.Component {
	render() {
		return <div className="app">
			<Header />
			<div className="posts">
				<PostsList posts={[]} />
			</div>
		</div>
	}
}
