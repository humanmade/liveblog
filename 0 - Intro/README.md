# Pre Assessment

1. Do you understand how and why "import" and "export" are being used in the example below?

```
import React from 'react'
import api from 'wordpress-rest-api-oauth-1'
import Header from './Header'
import PostsList from './PostsList'
import Welcome from './Welcome'

export default class App extends React.Component {

  ....

```


2. Do you understand how and why "filter" is being used below?

```
drafts = posts.filter( post => post.status === 'draft' );
```


3. Do you understand how and why "map" is being used below?

```
postList = posts.map( function( post ) { return '<li>' + post + '</li>' } );
```


4. Do you understand how and why the arrow function is being used below?

```
postList = posts.map( post => '<li>' + post + '</li>' );
```


5. Have you ever used JavaScript promises in your code?


6. Do you understand the basic Component architecture in React?


7. Do you understand how state and props are used in React


8. Do you understand the React Lifecycle?


9. Are you familiar with using ES6 Classes to create Components in React?


10. Have you worked with the WP API or other JSON based APIs before?
