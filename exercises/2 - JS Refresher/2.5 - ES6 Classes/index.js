// Create a Component class
// Create a MyComponent class that extends Component
class Component {
	constructor() {
		this.state = {}
	}
	render() {
		return 'Component'
	}
}
let c = new Component()
console.log( c )

// Create new instances of Component and MyComponent
// Log the render method for each class instance
class MyComponent extends Component {
	render() {
		return 'My Component'
	}
}
let mc = new MyComponent()
console.log( mc )
