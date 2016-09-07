import React from 'react'
import Count from './Count'
import CounterButton from './CounterButton'

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 0
		}
	}
	addToCounter() {
		let newCount =  this.state.count + 1
		this.setState({count: newCount})
	}
	render() {
		return <p>
			<Count
				count={this.state.count}
			/>
			<CounterButton
				update={() => this.addToCounter()}
			/>
		</p>
	}
}
