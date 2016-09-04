### Instructions

1. Create a PostBox.js
2. Add a text property to state
3. Create a form with textarea
4. Set the textarea value to state.textarea
5. Onchange for textarea, set the text state to the value of the textarea
6. Add a condition to test for user.capabilities.publish_posts
7. Inside conditional, add a button for Publishing
8. Attach an onCreatePost method to the button
9. Setup post variable in onCreatePost assigning Content and Title (abbreviation of content)
10. Call apiHandler.post
11. Pass in a prop to loadPosts and call it once apiHandler.post is complete
