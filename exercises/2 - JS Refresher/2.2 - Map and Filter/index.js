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
// Save and log out as postList
postList = posts.map(( post ) => '<li>' + post.title + '<li>')
console.log( postList )

// Filter posts with post.status of drafts
// Save as 'drafts' and log out
drafts = posts.filter((post) => post.status === 'draft')
console.log( drafts )
