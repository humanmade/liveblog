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


// Map through posts
// Wrap each post.title in a list item
// Log out postList
postList = posts.map( function( post ) { return '<li>' + post.title + '</li>' } )

console.log( postList )

// Filter posts and save posts
// with post.status of drafts to drafts variable
drafts = posts.filter( function( post ) { return post.status === 'draft' } )

console.log( drafts )
