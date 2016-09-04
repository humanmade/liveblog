let posts = [
      {
        title: 'Hello World',
        status: 'published',
      },
      {
        title: 'Hello JavaScript',
        status: 'published',
      },
      {
        title: 'Hello API',
        status: 'draft',
      }
    ],
    postList

postList = posts.map( function( post ) {
	return '<li>' + post.title + '</li>'
})
console.log( postList )
