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


postList = posts.map( post => '<li>' + post.title + '</li>' )
console.log( postList )

drafts = posts.filter( post => post.status === 'draft' )
console.log( drafts )
