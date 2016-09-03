class Component {

  constructor() {
		this.state = {}
	}

	render() {
		return 'Component'
	}
}

class MyComponent extends Component {
	render() {
		return 'MyComponent'
	}
}

let c = new Component(),
	cm = new MyComponent()

console.log( c.render() )
console.log( cm.render() )
