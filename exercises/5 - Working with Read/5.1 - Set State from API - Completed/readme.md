## Instructions

###Setup
- Run `npm install wordpress-rest-api-oauth-1 --save`
- Run 'npm install'
- Go over new server setup files
- Run 'npm start'

###App.js
- Import React
- Import 'wordpress-rest-api-oauth-1 --save'
- Set a const for the WP site url to 'http://awor.local'
- Create a constructor and call super
- Set state for posts to an empty array
- Create a componentWillMount method
- Call window.api.get and pass in the parameter of '/wp/v2/posts'
- Add then and pass in the posts, setting the state using the property shortcode
- In the render, return an unordered list and map through the posts, putting the title of each one into an li (make sure to add a key to each list item)

###Test
- Open localhost:3000, wait a moment and you should see the posts load
