## Instructions

In these exercise we explore how to save content via the API as well as update the status of posts once they are saved as pending.

## Step 1 - Adding Ability to Save

#### STEP 1.1
- Add title to state

#### STEP 1.2
- Create an opening and closing form tag
- Create an input field with a value equal to the title from state
- Attach an onChange event handler and update the state of title with e.target.value
- Create a button to "Save Draft" and have it call onSave with the parameter of pending when clicked
- Create a button to "Publish" and have it call onSave with the parameter of publish when clicked

#### STEP 1.3
- Create an onSave method that accepts a parameter of status
- Create an item variable and set the title from state and the status from the parameter
- Call api.post and pass it the item as the second parameter
- Use a promise to set state for title back to empty string and call loadItems()

## Step 2 - Adding Ability to Moderate Posts

#### STEP 2.2
- Create a new method called onApprove that accepts an id as a parameter
- Call api.post and append id to the end of '/wp/v2/posts/'
- As a second parameter pass an object with a status property set to publish
- Then use a promise to load the items again

#### STEP 2.3
- Create a new method called onReject that accepts id as a parameter
- Call api.del and append the id to the end of '/wp/v2/posts/'
- Then use a promise to load the items
