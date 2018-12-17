import React, { Component } from 'react';


class App extends Component {
	
	constructor(props) {
		super(props);

		this.state = {msg: '', firstName: '', sureName: ''};
	}
	
	handleClick = () => {
		let { msg } = this.state; 
		
		msg = (msg == '') ? 'Hello World' : '';
		
		this.setState({
			msg: msg	
		});
	}

	handleInput = event => {
		const { target } = event;
		const { name } = target;
		let value = (target.type == 'checkbox') ? target.checked : target.value;
		
		console.log(name)
		this.setState({
			[name]: value
		})
	}

	render() {
    	return (
			<div>
				<button onClick={this.handleClick}>Click me!</button>
				<p>{ this.state.msg }</p>
				<input type="text" name="firstName" onChange={this.handleInput}/>
				<input type="text" name="sureName" onChange={this.handleInput}/>
				<h1>{this.state.sureName} {this.state.firstName}</h1>
			</div>
    	);
  	}
}

export default App;
