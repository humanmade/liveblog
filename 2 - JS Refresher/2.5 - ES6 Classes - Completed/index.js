// Create a new class called Component
// Create a constructor() method and assign this.state to an empty object
// Create another method called render and return 'Component'

class Component {

  constructor() {
		this.state = {}
	}

	render() {
		return 'Component'
	}
}


// Create a new class MyComponent that extends Component
// Create a method render that returns 'MyComponent'

class MyComponent extends Component {
	render() {
		return 'MyComponent'
	}
}


// Create a new instance of MyComponent called c
// Log out c.render

let c = new MyComponent()
console.log( c.render() )
