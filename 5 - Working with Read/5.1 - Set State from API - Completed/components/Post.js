import React from 'react'

export default class Post extends React.Component {
	render() {
		let { post } = this.props,
		    date = (new Date( post.date )).toISOString().split('T')[1].slice(0, 5)

    return <p>
      {post.title.rendered} [{date}]
    </p>
  }
}
