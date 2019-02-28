import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	constructor() {
		//getInitialState
		super();

		this.addFish = this.addFish.bind(this);

		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		//update our state
		const fishes = {...this.state.fishes};
		//add in our new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		// this.state.fishes.fish1 = fish;
		//set state
		this.setState({fishes})

	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fish Marketplace" />
				</div>
				<Order />
				<Inventory addFish = {this.addFish} />
			</div>
		)
	}
}

export default App;