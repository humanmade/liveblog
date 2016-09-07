## Instructions

### STEP 1 - Setting State from API

- Set a const for site url to http://awor.local/
- Set state for items to empty array
- Create a new api instance as this.api
- Call api.get
- Use .then to set the state with the new items
- Map over the items
- Display the item titles in an unordered list
- Convert to using dangerouslySetInnerHTML


- Create a state for items and set to empty object
- In componentWillMount call get('/wp/v2/')
- Render an unordered list with a list of the item titles
- Convert title to use dangerouslySetInnerHTML

### STEP 2 - Customizing the Get Request

- Set args above the api.get call
- Assign _embed to true and per_page to 100
- Pass args as second parameter to api.get()
- Play around with other parameters
- (http://v2.wp-api.org/reference/posts/)

### STEP 3 - Refreshing Items

- Move the api.get() call out of componentWillMount
- Move api.get() into a custom method called loadItems
- Call the loadItems method
- Setup a timer to loadItems every 5 seconds
- Make sure to bind 'this' to the loadItems call
- Add a componentWillUnmount method
- Use clearInterval to clear out this.interval
