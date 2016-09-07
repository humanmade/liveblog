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
	mc = new MyComponent()

console.log( c.render() )
console.log( mc.render() )
