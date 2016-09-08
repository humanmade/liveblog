## Instructions

### STEP 1.1 - Creating a Method for Saving Likes
- Add an onLike method that accepts an item id as the parameter
- Call api.post with a parameter of '/liveblog-likes/v1/posts/' + id + '/like'

### STEP 1.2 - Displaying Likes and a Like Button
- Check that the status of post is set to publish and that item.liveblog_likes is set to a number
- Display the item.liveblog_likes
- Create a button that calls onLike on click and passes in the item id
