## Instructions

### Part 1 - Setting State from API

- Create an App component
- Create a state for posts and set to empty object
- In componentWillMount call get('/wp/v2/')
- Render an unordered list with a list of the post titles

### Part 2 - Customizing the Get Request

- Add an args array above the api.get call
- Pass the args array as a second parameter to api.get()
