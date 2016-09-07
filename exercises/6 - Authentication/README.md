## Instructions

### STEP 1 - Authorize with Broker
- Add a user to state and set to null
- Set the values for brokerURL, brokerCredentials and the callbackURL properties on the api instance in the constructor
- Call api.authorize in componentWillMount
- Use promise to load items

### STEP 2 - Getting Draft and Pending Posts
- Try pulling in pending, draft and all types of posts

### STEP 3 - Adding Login and Logout Buttons
- Move api.authorize and setInterval from componentWillMount to its own login method
- Use a promise to loadUser before loading items
- Create a new method called loadUser
- User api.get with '/wp/v2/users/me' along with _envelope = true as the parameter
- Use a promise to get the data from the call and return the data body
- Then use another promise to set the user to state
- Use a promise to load loadUser before loading the items in the login method
- Add a conditional statement to test if the user is set in the render return
- If user exists, display a logout button and list of posts
- If user does not exist, display a login button
