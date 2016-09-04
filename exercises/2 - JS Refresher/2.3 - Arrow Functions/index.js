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
    postList,
    drafts


// Rewrite map with an arrow function
postList = posts.map( function( post ) { return '<li>' + post.title + '</li>' } )

console.log( postList )

// Rewrite filter with an arrow function
drafts = posts.filter( function( post ) { return post.status === 'draft' } )

console.log( drafts )
