import React from 'react'
import Post from './Post'

export default class PostList extends React.Component {

	render() {

		let posts = this.props.posts

		return <div>

			{posts.map( post =>

				<Post
					key={post.id}
					onApprovePost={this.props.onApprovePost}
					onRejectPost={this.props.onRejectPost}
					post={post}
					user={this.props.user}
				/>

			)}

			<p className="actions">
				{this.props.user ?
					<button className="logout" onClick={() => this.props.onLogout()}>Log out</button>
				:
					<button className="login" onClick={() => this.props.onLogin()}>Log in</button>
				}
			</p>

		</div>

	}

}
