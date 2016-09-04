### Instructions

1. Write a onApprovePost and onRejectPost methods in App.js
2. Pass them as props to PostList and to Post
3. Use dangerously set HTML to show content
4. Create a PostActions component and call in Post
5. If post.status is not equal publish and user has capabilities.publish_posts then add a Discard and Publish button
6. Attach onRejectPost and onApprovePost
7. Update the status of the post in onApprovePost and call apiHandler.del on onRejectPost
